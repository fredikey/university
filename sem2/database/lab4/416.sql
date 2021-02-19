--Создайте новое бронирование текущей датой.
--В качестве номера бронирования можно взять любую последовательность из шести
--символов, начинающуюся на символ подчеркивания.
--Общая сумма должна составлять 30 000 рублей.

--Создайте электронный билет, связанный с бронированием, на ваше имя.
--Назначьте электронному билету два рейса: один из Москвы (VKO)
--во Владивосток (VVO) через неделю, другой — обратно через две недели. Оба
--рейса выполняются эконом-классом, стоимость каждого должна составлять 15 000 рублей.

-- add booking
insert into
	bookings
values
	('_99312', bookings.now(), 30000);

select * from bookings where book_ref = '_99312';


-- add ticket
insert into
	tickets (ticket_no, book_ref, passenger_id, passenger_name, contact_data)
values
	('4445432001047', '_99312', '1232 612370', 'VICTOR KOZODAEV', '{"phone": "+70403323675"}');

select * from tickets where ticket_no = '4445432001047';

-- add two flights
insert into
	flights (
		flight_no,
		aircraft_code,
		arrival_airport,
		departure_airport,
		scheduled_arrival,
		scheduled_departure,
		status)
values
	(
		'TD0561',
		'319',
		'VVO',
		'VKO',
		(bookings.now() + '1 week' + '5 hour'),
		(bookings.now() + '1 week'),
		'Scheduled'
	),
	(
		'TD0562',
		'319',
		'VKO',
		'VVO',
		(bookings.now() + '2 week' + '5 hour'),
		(bookings.now() + '2 week'),
		'Scheduled'
	);

select * from flights where flight_no = 'TD0562' or flight_no = 'TD0561'

-- add two ticket_flights

insert into
	ticket_flights (flight_id, ticket_no, amount, fare_conditions)
values
	(
		(
			select
				flight_id
			from
				flights
			where
				flight_no = 'TD0561'
		),
		'4445432001047',
		15000,
		'Economy'
	),
	(
		(
			select
				flight_id
			from
				flights
			where
				flight_no = 'TD0562'
		),
		'4445432001047',
		15000,
		'Economy'
	);

select * from ticket_flights where ticket_no = '4445432001047';
