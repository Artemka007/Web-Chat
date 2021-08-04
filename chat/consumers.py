from asyncio import events
import json

from asgiref.sync import sync_to_async
from channels.generic.websocket import AsyncWebsocketConsumer

from RESTaccount.serializer import UserSerializer
from chat.models import Chat, Message
from chat.serializers import ChatSerializer, MessageSerializer, CreateMessageSerializer
import random


class ChatConsumer(AsyncWebsocketConsumer):

    @sync_to_async
    def save_message(self, message):
        if message.is_valid():
            message.save()
        else:
            print(message)

    @sync_to_async
    def update_message(self, message):
        if message.is_valid():
            message.update()
        else:
            print(message)

    @sync_to_async
    def is_valid(self, message):
        return message.is_valid()

    @sync_to_async
    def create_message(self, data, instance=None):
        if instance:
            m = MessageSerializer(data=data, instance=instance)
            if m.is_valid():
                m.save()
                return m
            return None
        return CreateMessageSerializer(data=data)

    @sync_to_async
    def edit(self, message, data):
        message.update(body=data['body'])
        return MessageSerializer(message[0]).data

    @sync_to_async
    def delete(self, message, for_all=None):
        message = Message.objects.filter(pk=message)
        message.update(is_remove=for_all)
        return MessageSerializer(message[0]).data['id']

    @sync_to_async
    def get_message(self, pk: int):
        return Message.objects.filter(pk=pk)

    @sync_to_async
    def reply_to_message(self, message: dict, pk: int):
        reply_to_message = Message.objects.get(pk=pk)
        m = MessageSerializer(data=message)
        if not m.is_valid():
            return None
        else:
            m.save()
            m = Message.objects.get(pk=m.instance.id)
            reply_to_message.reply_message.add(m)
            return MessageSerializer(m).data

    async def connect(self):
        self.room_name = 'chat'
        self.group_name = 'chats'

        await self.channel_layer.group_add(
            self.group_name,
            self.channel_name
        )

        await self.accept()

    async def disconnect(self, code):
        await self.channel_layer.group_discard(
            self.group_name,
            self.channel_name
        )

    async def receive(self, text_data=None, bytes_data=None):
        if not self.scope['user']:
            await self.disconnect(401)

        data = json.loads(text_data)

        if data['event'] == 'get_chat':
            @sync_to_async
            def get_chat():
                return ChatSerializer(Chat.objects.get(pk=int(data['id']))).data

            chat = await get_chat()

            await self.channel_layer.group_send(
                self.group_name,
                {
                    'type': 'get_chat',
                    'event': 'get_chat',
                    'chat': chat,
                    'user': UserSerializer(self.scope['user']).data
                }
            )

        elif data['event'] == 'send_message':
            message = await self.create_message(data=data)
            if not await self.is_valid(message=message):
                # todo: ... any actions if message is not valid
                pass
            else:
                @sync_to_async
                def get_data():
                    return MessageSerializer(message.instance).data

                await self.save_message(message=message)
                await self.channel_layer.group_send(
                    self.group_name,
                    {
                        'type': 'send_message',
                        'event': 'send_message',
                        'message': await get_data()
                    }
                )

        elif data['event'] == 'reading_message':
            await self.channel_layer.group_send(
                self.group_name,
                {
                    'type': 'reading_message',
                    'event': 'reading_message',
                    'reader': UserSerializer(self.scope['user']).data
                }
            )

        elif data['event'] == 'edit_message':
            message = data['message']

            msg = await self.get_message(message['id'])
            message = await self.edit(msg, data['message'])

            await self.channel_layer.group_send(
                self.group_name,
                {
                    'type': 'edit_message',
                    'event': 'edit_message',
                    'message': message
                }
            )

        elif data['event'] == 'delete_message':
            ids = []
            for i in json.loads(data['messages']):
                ids.append(await self.delete(i, data['for_all']))
            await self.channel_layer.group_send(
                self.group_name,
                {
                    'type': 'delete_message',
                    'event': 'delete_message',
                    'for_all': data['for_all'],
                    'ids': ids
                }
            )

        elif data['event'] == 'reply_message':
            ms = data['message']
            pk = data['pk']
            m = await self.reply_to_message(message=ms, pk=pk)
            if m is None:
                # todo: any actions
                pass
            else:
                await self.channel_layer.group_send(
                    self.group_name,
                    {
                        'type': 'send_message',
                        'event': 'send_message',
                        'message': m
                    }
                )

    async def get_chat(self, event):
        await self.send(text_data=json.dumps({
            'event': event['event'],
            'chat': event['chat'],
            'user': event['user']
        }))

    async def send_message(self, event):
        await self.send(text_data=json.dumps({
            'event': event['event'],
            'message': event['message']
        }))

    async def reading_message(self, event):
        await self.send(text_data=json.dumps({
            'event': event['event'],
            'reader': event['reader']
        }))

    async def edit_message(self, event):
        await self.send(text_data=json.dumps({
            'event': event['event'],
            'message': event['message']
        }))

    async def delete_message(self, event):
        await self.send(text_data=json.dumps({
            'event': event['event'],
            'for_all': event['for_all'],
            'ids': event['ids']
        }))


class ChatCallConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['id']
        self.group_name = 'call_%s' % self.room_name

        self.sid = self.scope['user'].id

        await self.channel_layer.group_add(
            self.group_name,
            self.channel_name
        )

        await self.accept()

    async def disconnect(self, code):
        await self.channel_layer.group_discard(
            self.group_name,
            self.channel_name
        )

    async def receive(self, text_data=None, bytes_data=None):
        data = json.loads(text_data)
        event = data['event']
        if event == 'leave':
           await self.disconnect(500)
           return
        await self.channel_layer.group_send(
            self.group_name,
            {
                'type': 'call',
                'sid': data['sid'] or self.sid,
                 **data
            }
        )

    async def call(self, data):
        await self.send(text_data=json.dumps(
            data
        ))
