from django.urls import path

from account.views import AccountView

urlpatterns = [
    path('user/', AccountView.as_view())
]
