from rest_framework import serializers

from account.serializer import UserSerializer
from posts.models import Post


class PostSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=False)

    class Meta:
        model = Post
        fields = '__all__'
