--Теперь представьте сценарий, в котором нужно отменить не
--все данные, а только последний из добавленных электронных билетов.
--Для этого повторите все действия из предыдущего упражнения, но перед
--добавлением каждого билета создавайте точку сохранения (с одним и тем
--же именем). После ввода второго билета выполните откат
--к точке сохранения. Проверьте, что бронирование и первый билет остались.

begin;
insert into bookings
values ('3285C7', now(), 59900);

savepoint save;

insert into tickets
	(ticket_no, book_ref, passenger_id, passenger_name, contact_data)
values
	('3005432000987', '3285C7', '8149 604011',	'VALERIY TIKHONOV',	'{"phone": "+70127117011"}');

savepoint save;
--
insert into tickets
	(ticket_no, book_ref, passenger_id, passenger_name, contact_data)
values
	('3005432000988', '3285C7', '8149 604011',	'VALERIY TIKHONOV',	'{"phone": "+70127117011"}');

select
	*
from
	bookings b
		join tickets t on t.book_ref = b.book_ref
where
	b.book_ref = '3285C7';

-- then
rollback to save;

select
	*
from
	bookings b
		join tickets t on t.book_ref = b.book_ref
where
	b.book_ref = '3285C7';
