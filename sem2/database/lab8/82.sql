--Напишите запрос, выдающий список рейсов из демонстрационной базы в формате XML.

select xmlelement(name flight,
		xmlforest(
			departure_airport,
			arrival_airport
	))
from flights
