--Авиакомпания хочет предоставить пассажирам возможность
--повышения класса обслуживания уже после покупки билета при
--регистрации на рейс. За это взимается отдельная плата.
--Добавьте в демонстрационную базу данных возможность хранения таких операций.


CREATE TABLE tickets_flights_upgrade (
	ticket_no char(13) REFERENCES ticket_flights(ticket_no),
	flight_id integer REFERENCES ticket_flights(flight_id),
	fare_conditions varchar(10) NOT NULL,
	price numeric(10,2) NOT NULL,

	PRIMARY KEY(ticket_no, flight_id),

  CHECK (price >= 0),
  CHECK (fare_conditions IN ('Economy', 'Comfort', 'Business'))
);
