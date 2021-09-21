from django.db import models
from django.contrib.auth.models import User


class Post(models.Model):
    title = models.CharField(max_length=30)
    body = models.CharField(max_length=200)
    owner = models.ForeignKey(
        User, related_name="Posts",
        on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
