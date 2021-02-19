--Реализуйте функцию покупки билета. С точки зрения пассажира покупка
--состоит из двух этапов. На первом система выдает список
--возможных перелетов для указанных параметров: пункты отправления
--и назначения, количество мест, дата вылета.

--На втором — выбранный пассажиром вариант оформляется в виде бронирования,
--и пассажиру возвращается номер бронирования.
--Попробуйте различные способы: с помощью запросов SQL, с применением
--хранимых функций, на основе использования каркаса.

-- 1 step

create function firstStep(departure varchar, arrival varchar, dateObj timestamp) returns table (
  departure_airport char,
  arrival_airport char,
  scheduled_departure timestamp,
	seat_no bigint
) as $$

begin
	return query select f.departure_airport, f.arrival_airport, f.scheduled_departure, count(s.seat_no)
	from flights f
			join seats s on f.aircraft_code = s.aircraft_code
	where f.departure_airport = departure and
	      f.arrival_airport = arrival and
	      date(f.scheduled_departure) = date(dateObj)
	group by
		f.departure_airport,
    f.arrival_airport,
    f.scheduled_departure;
end;
$$
language plpgsql;

select * from firstStep('SVO', 'LED', '2017-09-10');

-- second step

create function secondStep(dateObj timestamptz, id char, name text, contact jsonb)
	returns char(6) as $$
    declare
        bookRef char(6);
        ticketNo char(13);
        total numeric;
    begin
			bookRef = '123123';
			ticketNo = '31312133';
			total = 15000;
			insert into bookings values (bookRef, dateObj, total);
			insert into tickets(ticket_no, book_ref, passenger_id, passenger_name, contact_data)
			values (ticketNo, bookRef, id, name, contact);
			return bookRef;
		end;
$$
language plpgsql;

select * from secondstep('2020-02-20', '123 33232', 'Name Ivanov', '{"phone": "+712312323"}');
