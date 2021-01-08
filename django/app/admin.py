from django.contrib import admin

# Register your models here.
from .models import City, Address, Seat, EventType, Event, Ticket, TicketClass, User, Order, SeatTicketClass

# register City Model
@admin.register(City)
class CityAdmin(admin.ModelAdmin):
  pass
  class Meta:
    verbose_name_plural = "Cities"

# register Address Model
@admin.register(Address)
class AddressAdmin(admin.ModelAdmin):
  list_display = ('name', 'city', 'coord_x', 'coord_y')
  list_filter = ('city',)
  search_fields = ('name', )

  class Meta:
    verbose_name_plural = "Addresses"


# register Seat Model
@admin.register(Seat)
class SeatAdmin(admin.ModelAdmin):
  list_display = ('address', 'row_number', 'seat_number')
  list_filter = ('address',)
  class Meta:
    verbose_name_plural = "Seats"

# register Event Type
@admin.register(EventType)
class EventTypeAdmin(admin.ModelAdmin):
	pass
	class Meta:
		verbose_name_plural = "Event types"

def make_finished(modeladmin, request, queryset):
	queryset.update(status=4)

# register Event Type
@admin.register(Event)
class EventTypeAdmin(admin.ModelAdmin):
  list_display = ('name', 'event_type', 'status', 'address', 'display_short_description', 'sale_start', 'time_start', 'time_end')
  list_filter = ('event_type', 'status', 'address', 'time_start' ,'time_end')
  search_fields = ('name', )
  actions=(make_finished, )
  class Meta:
    verbose_name_plural = "Events"

# register Ticket Class
@admin.register(TicketClass)
class TicketClassAdmin(admin.ModelAdmin):
  list_display = ('name', 'ticket_type', 'event', 'price', 'amount')
  list_filter = ('ticket_type', 'event', 'price', 'amount')
  search_fields = ('name', )
  class Meta:
    verbose_name_plural = "Ticket Classes"

# register Ticket
@admin.register(Ticket)
class TicketAdmin(admin.ModelAdmin):
  list_display = ('event', 'display_address', 'ticket_class',  'seat')
  list_filter = ('event', 'ticket_class')
  class Meta:
    verbose_name_plural = "Tickets"

# register User
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
  list_display = ('name', 'email')
  search_fields = ('name', )
  class Meta:
    verbose_name_plural = "Users"

# register Order
@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
  list_display = ('user', 'email', 'ticket')
  search_fields = ('email', )
  class Meta:
    verbose_name_plural = "Users"

# register Order
@admin.register(SeatTicketClass)
class SeatTicketClassAdmin(admin.ModelAdmin):
  list_display = ('ticket', 'seat')
  class Meta:
    verbose_name_plural = "Seats - Ticket Classes"

