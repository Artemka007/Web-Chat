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