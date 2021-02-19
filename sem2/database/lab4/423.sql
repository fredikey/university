--С целью оценки интенсивности работы обслуживающего
--персонала аэропорта Шереметьево (SVO) вычислите, сколько раз вылеты
--следовали друг за другом с перерывом менее пяти минут.

select
	count(*)
from
	flights f1
		join flights f2 on f2.flight_id = f1.flight_id

where
	f1.departure_airport = 'SVO' and
	f2.departure_airport = 'SVO' and
	(f1.actual_departure - f2.actual_departure < '5 minutes' or f2.actual_departure - f1.actual_departure < '5 minutes')
