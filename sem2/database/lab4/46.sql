--Выведите имена пассажиров, купивших билеты экономкласса за сумму,
--превышающую 70 000 рублей.

SELECT DISTINCT
	t.passenger_name
FROM
	tickets t
		JOIN ticket_flights tf ON t.ticket_no = tf.ticket_no
WHERE
	tf.fare_conditions = 'Economy' and
	tf.amount > 70000;
