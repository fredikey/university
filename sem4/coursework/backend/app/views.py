from django.http import HttpResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import City, EventType, Address, TicketClass, SeatTicketClass, Seat, Order, User, Ticket, Event
from .serializers import CitySer, EventTypeSer, AddressSer, TicketClassSer, SeatTicketClassSer, SeatSer, OrderSer, \
	UserSer, TicketSer, EventSer


# class CityView(APIView):
# 	def get(self, request):
# 		serializer = CitySerializer(City.objects.all(), many=True)
# 		return Response(serializer.data)
#
# 	def post(self, request):
# 		name = request.data.get('name')
# 		# Create an city from the above data
# 		serializer = CitySerializer(data={'name': name})
# 		if serializer.is_valid(raise_exception=True):
# 			city = serializer.save()
# 		return Response({"success": "City '{}' created successfully".format(city.name)})
#
#
# class EventTypeView(APIView):
# 	def get(self, request):
# 		serializer = EventTypeSerializer(EventType.objects.all(), many=True)
# 		return Response(serializer.data)
#
# 	def post(self, request):
# 		name = request.data.get('name')
# 		# Create an city from the above data
# 		serializer = EventTypeSerializer(data={'name': name})
# 		if serializer.is_valid(raise_exception=True):
# 			city = serializer.save()
# 		return Response({"success": "EventType '{}' created successfully".format(city.name)})


# ток гет запросы
class CityAPIView(APIView):

	def get(self, request):
		city = City.objects.all()
		serializer = CitySer(city, many=True)
		return Response(serializer.data)


class EventTypeAPIView(APIView):

	def get(self, request):
		eventType = EventType.objects.all()
		serializer = EventTypeSer(eventType, many=True)
		return Response(serializer.data)


class AddressAPIView(APIView):

	def get(self, request):
		address = Address.objects.all()
		serializer = AddressSer(address, many=True)
		return Response(serializer.data)


class SeatTicketClassAPIView(APIView):

	def get(self, request):
		seatTicketClass = SeatTicketClass.objects.all()
		serializer = SeatTicketClassSer(seatTicketClass, many=True)
		return Response(serializer.data)


class SeatAPIView(APIView):

	def get(self, request):
		seat = Seat.objects.all()
		serializer = SeatSer(seat, many=True)
		return Response(serializer.data)


class TicketClassAPIView(APIView):

	def get(self, request):
		ticketClass = TicketClass.objects.all()
		serializer = TicketClassSer(ticketClass, many=True)
		return Response(serializer.data)

# /ток гет запросы

# + пост, пут, делит

#######################################
###############order###################
#######################################
@api_view(['GET', 'POST'])
def order_list(request):

	if request.method == 'GET':
		order = Order.objects.all()
		serializer = OrderSer(order, many=True)
		return Response(serializer.data)

	elif request.method == 'POST':
		serializer = OrderSer(data=request.data)

		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def order_detail(request, pk):
	try:
		order = Order.objects.get(pk=pk)

	except Order.DoesNotExist:
		return HttpResponse(status=status.HTTP_404_NOT_FOUND)

	if request.method == 'GET':
		serializer = OrderSer(order)
		return Response(serializer.data)

	elif request.method == 'PUT':
		serializer = OrderSer(order, data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
	elif request.method == 'DELETE':
		order.delete()
		return Response(status=status.HTTP_204_NO_CONTENT)
#######################################
##############/order###################
#######################################


#######################################
###############user###################
#######################################
@api_view(['GET', 'POST'])
def user_list(request):

	if request.method == 'GET':
		user = User.objects.all()
		serializer = UserSer(user, many=True)
		return Response(serializer.data)

	elif request.method == 'POST':
		serializer = UserSer(data=request.data)

		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def user_detail(request, pk):
	try:
		user = User.objects.get(pk=pk)

	except User.DoesNotExist:
		return HttpResponse(status=status.HTTP_404_NOT_FOUND)

	if request.method == 'GET':
		serializer = UserSer(user)
		return Response(serializer.data)

	elif request.method == 'PUT':
		serializer = UserSer(user, data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
	elif request.method == 'DELETE':
		user.delete()
		return Response(status=status.HTTP_204_NO_CONTENT)
#######################################
##############/user###################
#######################################


#######################################
###############ticket###################
#######################################
@api_view(['GET', 'POST'])
def ticket_list(request):

	if request.method == 'GET':
		ticket = Ticket.objects.all()
		serializer = TicketSer(ticket, many=True)
		return Response(serializer.data)

	elif request.method == 'POST':
		serializer = TicketSer(data=request.data)

		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def ticket_detail(request, pk):
	try:
		ticket = Ticket.objects.get(pk=pk)

	except Ticket.DoesNotExist:
		return HttpResponse(status=status.HTTP_404_NOT_FOUND)

	if request.method == 'GET':
		serializer = TicketSer(ticket)
		return Response(serializer.data)

	elif request.method == 'PUT':
		serializer = TicketSer(ticket, data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
	elif request.method == 'DELETE':
		ticket.delete()
		return Response(status=status.HTTP_204_NO_CONTENT)
#######################################
##############/ticket###################
#######################################


#######################################
###############event###################
#######################################
@api_view(['GET', 'POST'])
def event_list(request):

	if request.method == 'GET':
		event = Event.objects.all()
		serializer = EventSer(event, many=True)
		return Response(serializer.data)

	elif request.method == 'POST':
		serializer = EventSer(data=request.data)

		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def event_detail(request, pk):
	try:
		event = Event.objects.get(pk=pk)

	except Event.DoesNotExist:
		return HttpResponse(status=status.HTTP_404_NOT_FOUND)

	if request.method == 'GET':
		serializer = EventSer(event)
		return Response(serializer.data)

	elif request.method == 'PUT':
		serializer = EventSer(event, data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
	elif request.method == 'DELETE':
		event.delete()
		return Response(status=status.HTTP_204_NO_CONTENT)
#######################################
##############/event###################
#######################################


