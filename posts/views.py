from rest_framework.response import Response
from rest_framework.views import APIView

from posts.models import Post
from posts.serializers import PostSerializer


class PostView(APIView):
    def get(self, request):
        id = request.GET.get('id')
        if id:
            try:
                post = Post.objects.get(pk=id)
            except Exception as e:
                return Response({'result': False, 'message': e.__str__()})
            return Response({'result': True, 'posts': PostSerializer(post, many=False).data})
        else:
            posts = Post.objects.all()
            return Response({'result': True, 'posts': PostSerializer(posts, many=True).data})
