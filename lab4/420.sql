--Найдите модели самолетов «дальнего следования»,
--максимальная продолжительность рейсов
--которых составила более 6 часов.

select distinct
	(select model from aircrafts_data ad where ad.aircraft_code = f.aircraft_code)
from
	flights f
where
 actual_arrival - actual_departure > '6 hours'
