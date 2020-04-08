--Подсчитайте количество отмененных рейсов из аэропорта Пулково (LED),
--и вылет, и прибытие которых было назначено на четверг.

SELECT
	*
FROM
	flights
WHERE
	departure_airport = 'LED' and
	status = 'Cancelled' and
	to_char(scheduled_departure, 'Day') = 'Thursday' and
	to_char(scheduled_arrival, 'Day') = 'Thursday'
