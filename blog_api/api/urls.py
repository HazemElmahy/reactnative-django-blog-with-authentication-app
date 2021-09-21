from django.urls import path
from rest_framework.schemas import get_schema_view
from rest_framework.documentation import include_docs_urls
from rest_framework_swagger.views import get_swagger_view
from . import views

schema_view = get_swagger_view(title='Pastebin API')

urlpatterns = [
    path('register', views.register_view),
    path('login', views.login_view),
    path('logout', views.logout_view),
    path('user', views.user_view),
    path('api/', views.post_list),
    path('api/<int:pk>', views.post_detail),
    path('', include_docs_urls(title='BlogAPI')),
    path('schema/', get_schema_view(
        title='BlogAPI',
        description='API for the blog',
        version='1.0.0'
    ), name='openapi-schema'),
]