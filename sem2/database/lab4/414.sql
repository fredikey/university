--Авиакомпания провела модернизацию салонов всех имеющихся
--самолетов «Сессна» (код CN1), в результате которой был добавлен
--седьмой ряд кресел. Измените соответствующую таблицу, чтобы отразить
--этот факт.

--7A	Economy
--7B	Economy

insert into
	seats (aircraft_code, seat_no, fare_conditions)
values
	('CN1', '7A', 'Economy'),
	('CN1', '7B', 'Economy')

