from django.urls import path

from chat.views import ChatView, UploadAudioMessageView

urlpatterns = [
    path('chats/', ChatView.as_view()),
    path('upload_message/', UploadAudioMessageView.as_view()),
]
