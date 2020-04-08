--Напишите запрос, возвращающий список аэропортов,
--в которых было принято более 500 рейсов.

select
	ad.airport_name,
	count(f.aircraft_code)
from
	flights f
		join airports_data ad on
			ad.airport_code = f.arrival_airport
group by
	ad.airport_name
having
	count(f.aircraft_code) > 500
order by
	count(f.aircraft_code)
