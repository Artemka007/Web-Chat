from rest_framework.response import Response
from rest_framework.views import APIView

from chat.models import Chat
from chat.serializers import ChatSerializer, AudioForMessageSerializer


class ChatView(APIView):
    def get(self, request):
        if not request.user.is_authenticated:
            return Response({'result': False, 'chats': None, 'message': 'User is not authenticated.'})
        c = Chat.objects.filter(users__in=[request.user])
        return Response({'result': True, 'chats': ChatSerializer(c, many=True).data})


class UploadAudioMessageView(APIView):
    def post(self, request):
        if not request.user.is_authenticated:
            return Response({'result': False, 'message': 'User is not authenticated.'})
        f = request.FILES.get('audio')
        f.name += ".mp3"
        s = AudioForMessageSerializer(data={'audio': f})
        if s.is_valid():
            s.save()
            return Response({'result': True, 'audio': s.instance.id})
        else:
            return Response({'result': False})
