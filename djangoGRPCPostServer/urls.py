from django.conf import settings
from django.conf.urls.static import static

from django.contrib import admin
from django.urls import path, include

from account import views


urlpatterns = [
    path('', views.index),
    path('posts', views.index),
    path('login', views.index),
    path('register', views.index),
    path('chat', views.index),
    path('all_chats', views.index),
    path('admin/', admin.site.urls),
    path('api/1.0/', include('account.urls')),
    path('api/1.0/', include('posts.urls')),
    path('api/1.0/', include('chat.urls')),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
