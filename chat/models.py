from django.contrib.auth.models import User
from django.db import models


class Chat(models.Model):
    title = models.CharField(max_length=128, null=True, blank=True)
    users = models.ManyToManyField(User, related_name='chat_users')
    is_group = models.BooleanField(default=False)

    def __str__(self):
        return self.title


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

    def __str__(self):
        return self.body[:50]


class AudioForMessage(models.Model):
    # I hope it work...
    # and I will not write additional tests for it 
    # 'cause I don't know how to upload files to test.
    audio = models.FileField(upload_to='audio_messages/')
