--Напечатанный посадочный талон должен содержать фамилию и имя пассажира,
--коды аэропортов вылета и прилета, дату и время вылета и прилета по расписанию,
--номер места в салоне самолета. Напишите запрос, выводящий всю необходимую информацию
--для полученных посадочных талонов на рейсы, которые еще не вылетели.

SELECT
	t.passenger_name,
	f.departure_airport,
	f.arrival_airport,
	f.scheduled_departure,
	f.scheduled_arrival,
	bp.seat_no
FROM
	flights f
		JOIN boarding_passes bp ON f.flight_id = bp.flight_id
		JOIN tickets t ON t.ticket_no = bp.ticket_no
WHERE
	f.status = 'On Time';
