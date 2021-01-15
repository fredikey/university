from django.db import models
from django.utils.translation import gettext_lazy as _

class City(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
	     return self.name

class Address(models.Model):
    city = models.ForeignKey(City, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    coord_x = models.FloatField()
    coord_y = models.FloatField()
    def __str__(self):
    	     return self.name

class Seat(models.Model):
    address = models.ForeignKey(Address, on_delete=models.CASCADE)
    row_number = models.IntegerField(blank=True)
    seat_number = models.IntegerField(blank=True)
    def __str__(self):
        return 'Ряд: {0}; Место: {1}'.format(self.row_number, self.seat_number)


class EventType(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
	     return self.name

class Event(models.Model):
		class EventStatus(models.IntegerChoices):
	  		IN_SALE = 0, _('В продаже')
	  		RUNNING = 1, _('Проходит сейчас')
	  		CANCELLED = 2, _('Отменено')
	  		SOLD_OUT = 3, _('Все распродано')
	  		FINISHED = 4, _('Завершено')

		name = models.CharField(max_length=50)
		event_type = models.ForeignKey(EventType, on_delete=models.CASCADE)
		address = models.ForeignKey(Address, on_delete=models.CASCADE)
		description = models.CharField(max_length=500)
		sale_start = models.DateTimeField(auto_now_add=True)
		time_end = models.DateTimeField()
		time_start = models.DateTimeField()
		status = models.IntegerField(
       choices=EventStatus.choices,
       default=EventStatus.IN_SALE,
    )
		def __str__(self):
	  		return self.name

		def display_short_description(self):
		    if (len(self.description) >= 50):
		        return self.description[0:50] + '...'
		    return self.description


class TicketClass(models.Model):
    class TicketType(models.IntegerChoices):
        SEAT = 0, _('Место')
        ENTER = 1, _('Вход')
    name = models.CharField(max_length=50)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    price = models.IntegerField()
    amount = models.IntegerField()
    ticket_type = models.IntegerField(
       choices=TicketType.choices,
       default=TicketType.SEAT,
    )
    def __str__(self):
	     return self.name

class Ticket(models.Model):
    ticket_class = models.ForeignKey(TicketClass, on_delete=models.CASCADE)
    seat = models.ForeignKey(Seat, on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    def __str__(self):
	     return self.event.name

    def display_address(self):
        return self.event.address.name

class User(models.Model):
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    def __str__(self):
	     return self.name

class Order(models.Model):
    ticket = models.ForeignKey(Ticket, on_delete=models.CASCADE)
    email = models.CharField(max_length=50)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    def __str__(self):
	     return self.ticket.event.name

class SeatTicketClass(models.Model):
    seat = models.ForeignKey(Seat, on_delete=models.CASCADE)
    ticket = models.ForeignKey(Ticket, on_delete=models.CASCADE)
    def __str__(self):
	     return ''
