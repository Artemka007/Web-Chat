import json
import pytest
from rest_framework import serializers
from chat.consumers import ChatConsumer
from chat.serializers import ChatSerializer, CreateChatSerializer, MessageSerializer
from chat.models import Chat, Message
from django.contrib.auth.models import User
from account.serializer import UserSerializer
from django.test import TestCase, Client
from channels.testing import WebsocketCommunicator
from asgiref.sync import sync_to_async
from djangoGRPCPostServer.routing import application
import pdb as _

class ChatTest(TestCase):
    
    def setUp(self):
        user = User.objects.create_user("test", "test@mail.com", "test")
        self.client.login(username="test", password="test")
        serializer = CreateChatSerializer(data={"title": "Test", "is_group": False, "chat_messages": [], "users": []})
        if serializer.is_valid():
            serializer.save()
            message = Message.objects.create(chat=serializer.instance, user=user, body="Test message.")
            message.save()
        else:
            raise Exception("Message serializer is not valid")
            
    def get_test_user_and_login(self):
        user = User.objects.get(username="test")
        return user

    def get_test_chat(self):
        serializer = CreateChatSerializer(Chat.objects.get(title="Test")).data
        return serializer

    def get_test_message(self):
        serializer = MessageSerializer(Message.objects.get(body="Test message.")).data
        return serializer

    # -------------------------------------------------------
    # ------------------- Chat view tests -------------------
    # -------------------------------------------------------
    def test_chat_view_get_all_chats_anonymous_user(self):
        self.client.logout()
        response = self.client.get("/api/1.0/chats/", follow=True, format="json")
        self.assertEquals(response.status_code, 200)
        self.assertEquals(response.data, {"result": False,'chats': None, 'message': 'User is not authenticated.'})

    def test_chat_view_get_all_chats_authorized_user(self):
        self.get_test_user_and_login()
        response = self.client.get("/api/1.0/chats/", follow=False, format="json")
        self.assertEquals(response.status_code, 200)
        self.assertEquals(response.data, {"result": True, "chats": []})

    # -------------------------------------------------------
    # ------------------ Chat models tests ------------------
    # -------------------------------------------------------
    def test_chat_model(self):
        user = self.get_test_user_and_login()
        chat = Chat.objects.get(title="Test")
        self.assertFalse(chat is None)
        chat.users.add(user)
        chat.save()
        self.assertEquals(user.chat_users.get(title="Test"), chat)
        self.assertEquals(chat.users.get(username="test"), user)

    def test_message_model(self):
        chat = Chat.objects.get(title="Test")
        user = self.get_test_user_and_login()
        message = Message.objects.get(body="Test message.")
        self.assertEquals(message.chat, chat)
        self.assertEquals(message.user, user)
        self.assertEquals(message, user.message_user.get(body="Test message."))
        self.assertEquals(message, chat.chat_messages.get(body="Test message."))