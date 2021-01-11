from django.contrib import admin

# Register your models here.
from .models import City, Address, Seat, EventType, Event, Ticket, TicketClass, User, Order, SeatTicketClass
from import_export.admin import ImportExportModelAdmin
from import_export import resources

# register City Model
class CityResource(resources.ModelResource):
    class Meta:
        model = City

@admin.register(City)
class CityAdmin(ImportExportModelAdmin):
  resource_class = CityResource
  class Meta:
    verbose_name_plural = "Cities"

# register Address Model
class AddressResource(resources.ModelResource):
    class Meta:
        model = Address

@admin.register(Address)
class AddressAdmin(ImportExportModelAdmin):
  list_display = ('name', 'city', 'coord_x', 'coord_y')
  list_filter = ('city',)
  search_fields = ('name', )
  resource_class = AddressResource

  class Meta:
    verbose_name_plural = "Addresses"


# register Seat Model
class SeatResource(resources.ModelResource):
    class Meta:
        model = Seat

@admin.register(Seat)
class SeatAdmin(ImportExportModelAdmin):
  list_display = ('address', 'row_number', 'seat_number')
  list_filter = ('address',)
  resource_class = SeatResource
  class Meta:
    verbose_name_plural = "Seats"

# register Event Type
class EventTypeResource(resources.ModelResource):
    class Meta:
        model = EventType

@admin.register(EventType)
class EventTypeAdmin(ImportExportModelAdmin):
    resource_class = EventTypeResource
    class Meta:
        verbose_name_plural = "Event types"

# register Event Type

def make_finished(modeladmin, request, queryset):
	queryset.update(status=4)

class EventResource(resources.ModelResource):
    class Meta:
        model = Event

@admin.register(Event)
class EventAdmin(ImportExportModelAdmin):
  list_display = ('name', 'event_type', 'status', 'address', 'display_short_description', 'sale_start', 'time_start', 'time_end')
  list_filter = ('event_type', 'status', 'address', 'time_start' ,'time_end')
  search_fields = ('name', )
  actions=(make_finished, )
  resource_class = EventResource
  class Meta:
    verbose_name_plural = "Events"

# register Ticket Class
class TicketClassResource(resources.ModelResource):
    class Meta:
        model = TicketClass

@admin.register(TicketClass)
class TicketClassAdmin(ImportExportModelAdmin):
  list_display = ('name', 'ticket_type', 'event', 'price', 'amount')
  list_filter = ('ticket_type', 'event', 'price', 'amount')
  search_fields = ('name', )
  resource_class = TicketClassResource
  class Meta:
    verbose_name_plural = "Ticket Classes"

# register Ticket
class TicketResource(resources.ModelResource):
    class Meta:
        model = Ticket

@admin.register(Ticket)
class TicketAdmin(ImportExportModelAdmin):
    list_display = ('event', 'display_address', 'ticket_class',  'seat')
    list_filter = ('event', 'ticket_class')
    resource_class = TicketResource
    class Meta:
        verbose_name_plural = "Tickets"

# register User
class UserResource(resources.ModelResource):
    class Meta:
        model = User

@admin.register(User)
class UserAdmin(ImportExportModelAdmin):
    list_display = ('name', 'email')
    search_fields = ('name', )
    resource_class = UserResource
    class Meta:
        verbose_name_plural = "Users"

# register Order
class OrderResource(resources.ModelResource):
    class Meta:
        model = Order

@admin.register(Order)
class OrderAdmin(ImportExportModelAdmin):
    list_display = ('user', 'email', 'ticket')
    search_fields = ('email', )
    resource_class = OrderResource
    class Meta:
        verbose_name_plural = "Users"

# register SeatTicketClass
@admin.register(SeatTicketClass)
class SeatTicketClassAdmin(ImportExportModelAdmin):
  list_display = ('ticket', 'seat')
  class Meta:
    verbose_name_plural = "Seats - Ticket Classes"

