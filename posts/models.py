from django.contrib.auth.models import User
from django.db import models


class Post(models.Model):
    user = models.ForeignKey(User, related_name='user_posts', on_delete=models.CASCADE)

    body = models.TextField()
    date = models.DateTimeField(auto_now=True)
