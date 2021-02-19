--Начните транзакцию (командой BEGIN) и
--создайте новое бронирование в таблице bookings сегодняшней датой.
--Добавьте два электронных билета в таблицу tickets, связанных с созданным бронированием.
--Представьте, что пользователь не подтвердил бронирование и все
--введенные данные необходимо отменить. Выполните отмену транзакции и
--проверьте, что никакой добавленной вами информации действительно
--не осталось.

begin;
insert into bookings
values ('2285C7', now(), 59900);

insert into tickets
	(ticket_no, book_ref, passenger_id, passenger_name, contact_data)
values
	('0005432000987', '2285C7', '8149 604011',	'VALERIY TIKHONOV',	'{"phone": "+70127117011"}'),
	('0005432000988', '2285C7', '8149 604011',	'VALERIY TIKHONOV',	'{"phone": "+70127117011"}');

select
	*
from
	bookings b
		join tickets t on t.book_ref = b.book_ref
where
	b.book_ref = '2285C7';

-- then
rollback;

select
	*
from
	bookings b
		join tickets t on t.book_ref = b.book_ref
where
	b.book_ref = '2285C7';
