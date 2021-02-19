--Повторите предыдущее упражнение, но транзакции в обоих
--сеансах начните с уровнем изоляции Serializable.
--Если вы правильно ответили на его последний вопрос,
--вы поймете, почему теперь эти действия приводят к ошибке. Если же результат этого
--упражнения стал для вас неожиданностью, четко сформулируйте
--различие уровней Repeatable Read и Serializable.

-- 1 step

--begin transaction isolation level Serializable;
--select count(*) from bookings where total_amount = 20000;

--begin transaction isolation level Serializable;
--select count(*) from bookings where total_amount = 30000;

-- 2 step
--insert into bookings values('1aha12', now(), 30000);
--select count(*) from bookings where total_amount = 20000;

--insert into bookings values('1aha21', now(), 20000);
--select count(*) from bookings where total_amount = 30000;

-- 3 step

--commit;
