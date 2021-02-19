--Напишите запрос, для каждого города показывающий
--количество пассажиров, прилетающих в него из Москвы в
--какой-нибудь определенный день.
--Запрос должен выдавать названия населенных пунктов на английском языке

select
	bookings_translate.city_translate,
	count(bookings_translate.ticket_flights.ticket_no)
from
	bookings_translate.city_translate n
		join bookings_translate.routes on n = routes.departure_city and routes.arrival_city = 'Москва'
		join bookings_translate.flights f on f.flight_no = bookings_translate.routes.flight_no
		join bookings_translate.ticket_flights tf on tf.flight_id = f.flight_id
group by
	bookings_translate.city_translate
