from django.urls import path
from . import views

urlpatterns = [
    path('', views.login_page, name='loginpage'),  # Default page
    path('thirdmainpage/', views.third_main_page, name='thirdmainpage'),
    path('symbol/', views.symbol, name='symbol'),
    path('forthpage/', views.forth_page, name='forthpage'),
    path('explore-career-path/', views.explore_career_path, name='explore_career_path'),
    path('take-career-test/', views.take_career_test, name='take_career_test'),
]
