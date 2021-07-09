from django.urls import path

from .views import CityAPIView, EventTypeAPIView, AddressAPIView, TicketClassAPIView, SeatTicketClassAPIView, \
    SeatAPIView, order_list, order_detail, user_detail, user_list, ticket_detail, ticket_list, event_list, event_detail

urlpatterns = [
    path('city/', CityAPIView.as_view()),
    path('eventType/', EventTypeAPIView.as_view()),
    path('address/', AddressAPIView.as_view()),
    path('ticketClass/', TicketClassAPIView.as_view()),
    path('seatTicketClass/', SeatTicketClassAPIView.as_view()),
    path('seat/', SeatAPIView.as_view()),

    path('order-list/', order_list), # гет и пост
    path('order-detail/<int:pk>', order_detail), # гет, пут, делит

    path('user-list/', user_list),  # гет и пост
    path('user-detail/<int:pk>', user_detail), # гет, пут, делит

    path('ticket-list/', ticket_list),  # гет и пост
    path('ticket-detail/<int:pk>', ticket_detail),  # гет, пут, делит

    path('event-list/', event_list),  # гет и пост
    path('event-detail/<int:pk>', event_detail),  # гет, пут, делит
]
