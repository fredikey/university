--Определите номера и времена отправления всех
--рейсов, прибывших в аэропорт назначения не вовремя.

select
	f.flight_no,
	f.scheduled_arrival
from
	flights f
where
	f.scheduled_arrival < f.actual_arrival
