--Подсчитайте количество рейсов, которые хотя бы раз были
--задержаны более чем на 4 часа

select
	count(*)
from
	flights f
where
	f.actual_departure - f.scheduled_departure > '4 hours'
