from django.contrib.auth import logout, authenticate, login
from django.contrib.auth.forms import AuthenticationForm
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializer import UserSerializer
from account.forms import SignUpForm


def index(request):
    return render(request, 'index.html')


class AccountView(APIView):
    def get(self, request):
        if request.user.is_authenticated:
            return Response({'result': True, 'user': UserSerializer(request.user).data})
        else:
            return Response({'result': False, 'user': None})

    def post(self, request):
        form = SignUpForm(request.data)
        if form.is_valid():
            form.save()
            return Response({'result': True, 'message': 'Form was save.'})
        return Response({'result': False, 'message': 'Something was wrong... Please, try again', 'errors': form.errors})

    def put(self, request):
        form = AuthenticationForm(request, data=request.data)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return Response({'result': True, 'message': 'You are now logged in!'})
            return Response({'result': False, 'message': 'Invalid username or password.'})
        return Response({'result': False, 'message': 'Invalid username or password.', 'errors': form.errors})

    def delete(self, request):
        logout(request)
        return Response({'result': True, 'message': 'Logout success.'})
