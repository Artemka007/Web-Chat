from django.contrib.auth.models import User
from django.db import models


class Chat(models.Model):
    users = models.ManyToManyField(User, related_name='chat_users')
    is_group = models.BooleanField(default=False)


class Message(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='message_user')
    chat = models.ForeignKey(Chat, on_delete=models.CASCADE, related_name='chat_messages')
    body = models.TextField(blank=True)
    date = models.DateTimeField(auto_now=True)
    reply_to_message = models.ForeignKey('self', on_delete=models.CASCADE, related_name='reply_message', null=True,
                                         blank=True)

    audio_message = models.OneToOneField('AudioForMessage', on_delete=models.CASCADE, related_name='message', null=True,
                                         blank=True)

    was_read = models.BooleanField(default=False)
    is_remove = models.BooleanField(default=False, null=True)
    is_forward = models.BooleanField(default=False)


class AudioForMessage(models.Model):
    audio = models.FileField(upload_to='audio_messages/')
