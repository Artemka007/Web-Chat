from django.urls import path
from .consumers import ChatConsumer, ChatCallConsumer

websocket_urlpatterns = [
    path('chat/', ChatConsumer.as_asgi()),
    path('call/<int:id>/', ChatCallConsumer.as_asgi()),
]
