from django.urls import path

from .views import CityView, EventTypeView

urlpatterns = [
    path('cities/', CityView.as_view()),
    path('eventType/', EventTypeView.as_view()),
]
