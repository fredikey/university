--Некоторые пассажиры, вылетающие сегодняшним рейсом («сегодня»
--определяется функцией bookings.now), еще не прошли регистрацию,
--т. е. не получили посадочного талона.
--Выведите имена этих пассажиров и номера рейсов.

select
	t.passenger_name,
	f.flight_no
from
	tickets t
		join ticket_flights tf on t.ticket_no = tf.ticket_no
		join flights f on tf.flight_id = f.flight_id
		left join boarding_passes bp on
			t.ticket_no = bp.ticket_no and
			f.flight_id = bp.flight_id
where
	f.scheduled_departure > bookings.now() and
	bp.ticket_no is null
