from rest_framework import serializers
from .models import City, EventType, Order, User, Ticket, TicketClass, SeatTicketClass, Event, Seat, Address


# class CitySerializer(serializers.Serializer):
# 	name = serializers.CharField(max_length=50)
#
# 	def create(self, validated_data):
# 		print(validated_data)
# 		data = City.objects.create(**validated_data)
# 		print(data)
# 		return data
#
#
# class EventTypeSerializer(serializers.Serializer):
# 	name = serializers.CharField(max_length=50)
#
# 	def create(self, validated_data):
# 		print(validated_data)
# 		data = EventType.objects.create(**validated_data)
# 		print(data)
# 		return data


class OrderSer(serializers.ModelSerializer):
	class Meta:
		model = Order
		fields = '__all__'


class UserSer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = '__all__'


class TicketSer(serializers.ModelSerializer):
	class Meta:
		model = Ticket
		fields = '__all__'


class TicketClassSer(serializers.ModelSerializer):
	class Meta:
		model = TicketClass
		fields = '__all__'


class SeatTicketClassSer(serializers.ModelSerializer):
	class Meta:
		model = SeatTicketClass
		fields = '__all__'


class EventSer(serializers.ModelSerializer):
	class Meta:
		model = Event
		fields = '__all__'


class CitySer(serializers.ModelSerializer):
	class Meta:
		model = City
		fields = '__all__'


class EventTypeSer(serializers.ModelSerializer):
	class Meta:
		model = EventType
		fields = '__all__'


class AddressSer(serializers.ModelSerializer):
	class Meta:
		model = Address
		fields = '__all__'


class SeatSer(serializers.ModelSerializer):
	class Meta:
		model = Seat
		fields = '__all__'
