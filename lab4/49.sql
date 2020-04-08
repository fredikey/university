--Выведите номера мест, оставшихся свободными в рейсах из Анапы (AAQ)
--в Шереметьево (SVO), вместе с номером рейса и его датой.

select
	s.seat_no,
	f.flight_no,
	f.scheduled_departure
from
	flights f
		join seats s on
			s.aircraft_code = f.aircraft_code
		join ticket_flights tf on
			tf.flight_id = f.flight_id
		join boarding_passes bp on
			bp.flight_id = tf.flight_id and
			bp.ticket_no = tf.ticket_no and
			bp.seat_no = s.seat_no
where
	f.departure_airport = 'AAQ' and
	f.arrival_airport = 'SVO' and
	f.status != 'Arrived'
