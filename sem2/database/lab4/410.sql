--Напишите запрос, возвращающий среднюю стоимость авиабилета из Воронежа (VOZ)
--в Санкт-Петербург (LED). Поэкспериментируйте с другими
--агрегирующими функциями (sum, max). Какие еще агрегирующие функции бывают?

select
	count(b.total_amount),
	sum(b.total_amount),
	avg(b.total_amount),
	max(b.total_amount),
	min(b.total_amount)
from
	tickets t
		join ticket_flights tf on
			tf.ticket_no = t.ticket_no
		join flights f on
			f.flight_id = tf.flight_id
		join bookings b on
			t.book_ref = b.book_ref
where
	f.departure_airport = 'VOZ' and
	f.arrival_airport = 'LED'

