--Выведите все модели самолетов вместе с общим количеством
--мест в салоне.

select
	ad.model,
	count(s.seat_no)
from
	aircrafts_data ad
		join seats s on
			s.aircraft_code = ad.aircraft_code
group by
	ad.aircraft_code
