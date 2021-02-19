--Повторите предыдущее упражнение, но начните транзакцию
--в первом сеансе с уровнем изоляции транзакций Repeatable Read.
--Объясните различие полученных результатов.


--select * from bookings where total_amount = 1000;


--begin transaction isolation level repeatable read;
--update bookings set total_amount = total_amount * 2
--where total_amount = 1000;

--begin;
--insert into bookings values ('H12HEY', now(), 1000);
--commit;


--begin transaction isolation level repeatable read;
--update bookings set total_amount = total_amount * 2
--where total_amount = 1000;
--commit;

--select * from bookings where book_ref = 'H12HEY'


--повторное выполнение операций поиска и выборки данных
--дает такие же результаты, как первое, т. е. запрещаются аномалии грязного и нечеткого чтения
