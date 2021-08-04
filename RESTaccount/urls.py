from django.urls import path

from RESTaccount.views import UserView

urlpatterns = [
    path('users/', UserView.as_view())
]
