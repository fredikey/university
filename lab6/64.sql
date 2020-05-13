--Перед началом выполнения задания проверьте, что в таблице bookings
--нет бронирований на сумму total_amount 1 000 рублей.
--1. В первом сеансе начните транзакцию (командой BEGIN). Выполните
--обновление таблицы bookings: увеличьте total_amount в два раза в тех
--строках, где сумма равна 1 000 рублей.

--2. Во втором сеансе (откройте новое окно psql) вставьте в таблицу
--bookings новое бронирование на 1 000 рублей и зафиксируйте транзакцию.

--3. В первом сеансе повторите обновление таблицы bookings и зафиксируйте транзацию.

--select * from bookings where total_amount = 1000;

--begin;
--update bookings set total_amount = total_amount * 2
--where total_amount = 1000;

--begin;
--insert into bookings values ('He2HEY', now(), 1000);
--commit;


--begin;
--update bookings set total_amount = total_amount * 2
--where total_amount = 1000;
--commit;

--Осталась ли сумма добавленного бронирования равной 1 000 рублей? Почему это не так?

-- тк результаты других транзакций становятся доступными после их фиксации
