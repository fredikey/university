--Напишите запрос, выдающий заданное бронирование в формате JSON,
--включая все входящие в него билеты и перелеты для каждого из билетов.

select json_build_object(
	'book_id', b.book_ref,
	'date', b.book_date,
	'total', b.total_amount,
	'tickets',  t.ticket_no,
	'flight_id', f.flight_id
)
from bookings b
	join tickets t on t.book_ref = b.book_ref
	join ticket_flights tf on tf.ticket_no = t.ticket_no
	join flights f on f.flight_id = tf.flight_id
where b.book_ref = '0002F3'
