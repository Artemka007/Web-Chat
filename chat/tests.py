from channels.generic.websocket import WebsocketConsumer
from chat.serializers import ChatSerializer
from chat.consumers import ChatConsumer
from chat.models import Chat, Message
from django.contrib.auth.models import User
from account.serializer import UserSerializer
from django.test import TestCase
from channels.testing import WebsocketCommunicator
from asgiref.sync import sync_to_async
from djangoGRPCPostServer.routing import application

class ChatTest(TestCase):
    def create_test_user_and_login(self):
        user = User.objects.create_user("test", "test@mail.com", "test")
        self.client.login(username="test", password="test")
        return user

    def create_test_chat(self):
        chat = Chat.objects.create(title="Test", is_group=False)
        chat.save()
        return chat

    # -------------------------------------------------------
    # ------------------- Chat view tests -------------------
    # -------------------------------------------------------
    def test_chat_view_get_all_chats_anonymous_user(self):
        response = self.client.get("/api/1.0/chats/", follow=True, format="json")
        self.assertEquals(response.status_code, 200)
        self.assertEquals(response.data, {"result": False,'chats': None, 'message': 'User is not authenticated.'})

    def test_chat_view_get_all_chats_authorized_user(self):
        self.create_test_user_and_login()
        response = self.client.get("/api/1.0/chats/", follow=False, format="json")
        self.assertEquals(response.status_code, 200)
        self.assertEquals(response.data, {"result": True, "chats": []})

    # -------------------------------------------------------
    # ------------------ Chat models tests ------------------
    # -------------------------------------------------------
    def test_chat_model(self):
        user = self.create_test_user_and_login()
        chat = self.create_test_chat()
        chat.users.add(user)
        chat.save()
        self.assertEquals(user.chat_users.get(title="Test"), chat)
        self.assertEquals(chat.users.get(username="test"), user)

    def test_message_model(self):
        chat = self.create_test_chat()
        user = self.create_test_user_and_login()
        message = Message.objects.create(chat=chat, user=user, body="Test message.")
        self.assertEquals(message.chat, chat)
        self.assertEquals(message.user, user)
        self.assertEquals(message, user.message_user.get(body="Test message."))
        self.assertEquals(message, chat.chat_messages.get(body="Test message."))

    # -------------------------------------------------------
    # ---------------- Chat consumers tests -----------------
    # -------------------------------------------------------
    # async def test_chat_consumer_get_chat(self):
    #     @sync_to_async()
    #     def get_async_chat():
    #         return ChatSerializer(self.create_test_chat()).data
    #     @sync_to_async()
    #     def get_async_user():
    #         return UserSerializer(self.create_test_user_and_login()).data
    #     @sync_to_async()
    #     def get_communicator():
    #         communicator = WebsocketCommunicator(application, "/chat/")
    #         communicator.connect()
    #         return communicator
    #     chat = await get_async_chat()
    #     user = await get_async_user()
    #     communicator = await get_communicator()
    #     event = await communicator.send_input({
    #         "event": "get_chat",
    #         "id": "1"
    #     })
    #     
    #     self.assertEqual({
    #         'type': 'get_chat',
    #         'event': 'get_chat',
    #         'chat': chat,
    #         'user': user
    #     }, event)
