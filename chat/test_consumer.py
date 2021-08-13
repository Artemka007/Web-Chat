from account.serializer import UserSerializer
import json
import pytest
from .serializers import ChatSerializer, CreateChatSerializer, MessageSerializer
from .models import Message
from django.contrib.auth.models import User
from django.test import Client
from channels.testing import WebsocketCommunicator
from asgiref.sync import sync_to_async
from djangoGRPCPostServer.routing import application
import pdb as _

@pytest.mark.django_db(transaction=True)
@pytest.mark.asyncio
async def test_chat_consumer_forward_message():
    client = Client()
    @sync_to_async
    def get_message():
        user = User.objects.create_user("test", "test@mail.com", "test")
        client.login(username="test", password="test")
        serializer1 = CreateChatSerializer(data={"title": "Test1", "is_group": False, "chat_messages": [], "users": []})
        serializer2 = CreateChatSerializer(data={"title": "Test2", "is_group": False, "chat_messages": [], "users": []})
        if serializer1.is_valid():
            serializer1.save()
            message = Message.objects.create(chat=serializer1.instance, user=user, body="Test message.")
            message.save()
            if serializer2.is_valid():
                serializer2.save()
                return (MessageSerializer(message).data, ChatSerializer(serializer2.instance).data)
            return (None, None)
        return (None, None)
    data = {}
    message, chat = await get_message()
    data['event'] = "forward_message"
    data['message'] = message
    data['chat_pk'] = chat["id"]
    communicator = WebsocketCommunicator(application, "/chat/")
    connected, subprotocol = await communicator.connect()
    assert connected == True
    await communicator.send_to(text_data=json.dumps(data))
    response = await communicator.receive_json_from()
    await communicator.disconnect()
    assert 'message' in response, "Message was not returned."
    assert response['message'] is not None, "Message in response is None"
    assert response['message']['chat'] is not None, "Message chat id is None"

@pytest.mark.django_db(transaction=True)
@pytest.mark.asyncio
async def test_chat_consumer_get_chat():
    client = Client()
    @sync_to_async()
    def get_async_chat_and_user():
        user = User.objects.create_user("test", "test@mail.com", "test")
        client.login(username="test", password="test")
        serializer = CreateChatSerializer(data={"title": "Test1", "is_group": False, "chat_messages": [], "users": []})
        if serializer.is_valid():
            serializer.save()
            return (ChatSerializer(serializer.instance).data, UserSerializer(user).data)
        else:
            return (None, None)
    chat, user = await get_async_chat_and_user()
    assert chat is not None, "Chat serializer is invalid."
    communicator = WebsocketCommunicator(application, "/chat/")
    connected, subprotocol = await communicator.connect()
    assert connected, "Communicator was not connected."
    await communicator.send_to(text_data=json.dumps({
        "event": "get_chat",
        "id": str(chat['id'])
    }))
    response = await communicator.receive_json_from()
    await communicator.disconnect()
    # assert response["user"]["id"] == user["id"], "User id is not valid."
    assert response["chat"]["id"] == chat["id"], "Chat id is not valid."

@pytest.mark.django_db(transaction=True)
@pytest.mark.asyncio
async def test_chat_consumer_send_message():
    client = Client()
    @sync_to_async()
    def get_async_chat_and_user():
        user = User.objects.create_user("test", "test@mail.com", "test")
        client.login(username="test", password="test")
        serializer = CreateChatSerializer(data={"title": "Test1", "is_group": False, "chat_messages": [], "users": []})
        if serializer.is_valid():
            serializer.save()
            return (ChatSerializer(serializer.instance).data, UserSerializer(user).data)
        else:
            return (None, None)
    chat, user = await get_async_chat_and_user()
    test_message = {'body': 'Test message.', 'user': user['id'], 'chat': chat['id']}
    communicator = WebsocketCommunicator(application, "/chat/")
    connected, subprotocol = await communicator.connect()
    assert connected, "Communicator was not connected."
    await communicator.send_to(text_data=json.dumps({
        'event': 'send_message',
        'message': test_message
    }))
    response = await communicator.receive_json_from()
    await communicator.disconnect()
    assert response["message"]["body"] == test_message["body"], "Message body is not valid."
    assert response["message"]["chat"] == chat['id'], "Message chat id is not valid."
    assert response["message"]["user"] == user["id"], "Message user id is not valid."

@pytest.mark.django_db(transaction=True)
@pytest.mark.asyncio
async def test_chat_consumer_writing_message():
    client = Client()
    @sync_to_async
    def login():
        client.login()
    await login()
    communicator = WebsocketCommunicator(application, "/chat/")
    connected, subprotocol = await communicator.connect()
    assert connected, "Communicator was not connected."
    await communicator.send_to(text_data=json.dumps({
        'event': 'writing_message'
    }))
    response = await communicator.receive_json_from()
    await communicator.disconnect()
    assert 'writer' in response and response['writer'] is not None, 'Writer is None.'
