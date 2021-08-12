import rest_framework.serializers as serializers

from account.serializer import UserSerializer
from chat.models import Chat, Message, AudioForMessage


class DoubleMessageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Message
        fields = '__all__'


class AudioForMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = AudioForMessage
        fields = '__all__'


class MessageSerializer(serializers.ModelSerializer):
    reply_to_message = DoubleMessageSerializer(many=False, read_only=True)
    audio_message = AudioForMessageSerializer(many=False, read_only=True)

    class Meta:
        model = Message
        fields = '__all__'


class CreateMessageSerializer(serializers.ModelSerializer):
    reply_to_message = DoubleMessageSerializer(many=False, read_only=True)

    class Meta:
        model = Message
        fields = '__all__'


class ChatSerializer(serializers.ModelSerializer):
    chat_messages = MessageSerializer(many=True, read_only=False)
    users = UserSerializer(many=True, read_only=False)

    class Meta:
        model = Chat
        fields = '__all__'

