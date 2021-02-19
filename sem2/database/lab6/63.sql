--В рамках той же транзакции добавьте еще один электронный
--билет и зафиксируйте транзакцию. Обратите внимание на то, что после
--этой операции отменить внесенные транзакцией изменения будет уже
--невозможно.

begin;

insert into tickets
	(ticket_no, book_ref, passenger_id, passenger_name, contact_data)
values
	('4005432000987', '2285C9', '8149 604011',	'VALERIY TIKHONOV',	'{"phone": "+70127117011"}');

commit;

select
	*
from
	bookings b
		join tickets t on t.book_ref = b.book_ref
where
	b.book_ref = '2285C9';

rollback;

select
	*
from
	bookings b
		join tickets t on t.book_ref = b.book_ref
where
	b.book_ref = '2285C9';

