from djangoGRPCPostServer.secrets import TEST_USER
from django.test import TestCase
from rest_framework import status
from .serializer import UserSerializer
from django.contrib.auth.models import User

class TestAccount(TestCase):
    def test_account_view_deny_anonymous_or_logout_user(self):
        response = self.client.get("/api/1.0/user/", follow=True, format="json")
        self.assertEquals(response.status_code, status.HTTP_200_OK)
        self.assertEquals(response.data, {"result": False, "user": None})

    def test_account_view_authorized_user(self):
        user = User.objects.create_user("test", "test@mail.com", "test")
        self.client.login(username="test", password="test")
        response = self.client.get("/api/1.0/user/", follow=False, format="json")
        self.assertEquals(response.status_code, status.HTTP_200_OK)
        self.assertEquals(response.data, {"result": True, "user": UserSerializer(user).data})
