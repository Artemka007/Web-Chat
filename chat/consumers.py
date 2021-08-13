import json

from asgiref.sync import sync_to_async
from channels.generic.websocket import AsyncWebsocketConsumer
from django.contrib.auth.models import User
from rest_framework import serializers

from account.serializer import UserSerializer
from chat.models import Chat, Message
from chat.serializers import ChatSerializer, MessageSerializer, CreateMessageSerializer
import random


class ChatConsumer(AsyncWebsocketConsumer):
    @sync_to_async
    def update_message(self, message):
        if message.is_valid():
            message.update()
        else:
            print(message)

    @sync_to_async
    def create_message(self, data, instance=None):
        message = None
        serializer = None
        if instance:
            serializer = MessageSerializer(data=data, instance=instance)
            if serializer.is_valid():
                serializer.save()
                message = MessageSerializer(serializer.instance).data
        serializer = CreateMessageSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            message = MessageSerializer(serializer.instance).data
        return message

    @sync_to_async
    def edit(self, message, data):
        message.update(body=data['body'])
        return MessageSerializer(message[0]).data

    @sync_to_async
    def delete(self, message, for_all=None):
        message = Message.objects.filter(pk=message)
        message.update(is_remove=for_all)
        return MessageSerializer(message[0]).data

    @sync_to_async
    def get_message(self, pk: int):
        return Message.objects.filter(pk=pk)

    @sync_to_async
    def forward(self, message, chat_pk:int):
        chat = Chat.objects.get(pk=chat_pk).pk 
        serializer = CreateMessageSerializer(data={
            "body": message["body"],
            "audio_message": message["audio_message"],
            "user": 1, 
            "chat": chat,
            "is_forward": True
        })
        if serializer.is_valid():
            serializer.save()
            print("SUCCESS")
            return MessageSerializer(serializer.instance).data
        else:
            print("ERROR")

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
        if not 'user' in self.scope:
            await self.disconnect(401)
        data = json.loads(text_data)
        if data['event'] == 'get_chat':
            # todo: change database to postgresql
            @sync_to_async
            def get_chat():
                try:
                    chat = Chat.objects.get(pk=int(data['id']))
                    return (ChatSerializer(chat).data, None)
                except Exception as e:
                    return (None, e)
            @sync_to_async
            def get_all_chats_for_test():
                return ChatSerializer(Chat.objects.all(), many=True).data
            chats = await get_all_chats_for_test()
            chat, e = await get_chat()
            user = None
            if 'user' in self.scope:
                user = UserSerializer(self.scope['user']).data
            await self.channel_layer.group_send(
                self.group_name,
                {
                    'type': data['event'],
                    'event': data['event'],
                    'chat': chat,
                    'user': user
                }
            )

        elif data['event'] == 'send_message':
            message = await self.create_message(data=data)
            await self.channel_layer.group_send(
                self.group_name,
                {
                    'type': data['event'],
                    'event': data['event'],
                    'message': message
                }
            )

        elif data['event'] == 'reading_message':
            await self.channel_layer.group_send(
                self.group_name,
                {
                    'type': data['event'],
                    'event': data['event'],
                    'reader': UserSerializer(self.scope['user']).data
                }
            )

        elif data['event'] == 'edit_message':
            msg = await self.get_message(data['message']['id'])
            message = await self.edit(msg, data['message'])
            await self.channel_layer.group_send(
                self.group_name,
                {
                    'type': data['event'],
                    'event': data['event'],
                    'message': message
                }
            )

        elif data['event'] == 'delete_message':
            ids = []
            for i in json.loads(data['messages']):
                ids.append(await self.delete(i, data['for_all'])['id'])
            await self.channel_layer.group_send(
                self.group_name,
                {
                    'type': data['event'],
                    'event': data['event'],
                    'for_all': data['for_all'],
                    'ids': ids
                }
            )

        elif data['event'] == 'reply_message':
            message = await self.reply_to_message(
                message=data['message'], 
                pk=data['pk']
            )
            if message is None:
                # todo: any actions
                pass
            else:
                await self.channel_layer.group_send(
                    self.group_name,
                    {
                        'type': 'send_message',
                        'event': 'send_message',
                        'message': message
                    }
                )

        elif data['event'] == 'forward_message':
            message = await self.forward(data['message'], data['chat_pk'])
            await self.channel_layer.group_send(
                self.group_name,
                {
                    'type': data['event'],
                    'event': data['event'],
                    'message': message,
                    'chat_pk': data["chat_pk"]
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

    async def forward_message(self, event):
        await self.send(text_data=json.dumps({
            'event': event['event'],
            'message': event['message'],
            'chat_pk': event['chat_pk']
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

    async def disconnect(self, code=500):
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
        await self.send(text_data=json.dumps(data))
