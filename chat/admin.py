from django.contrib import admin

from chat.models import Chat, Message, AudioForMessage

admin.site.register(Chat)
admin.site.register(Message)
admin.site.register(AudioForMessage)
