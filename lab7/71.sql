
--Создайте новую схему демонстрационной базы
--таким образом, чтобы названия населенных пунктов
--хранились в соответствии с выбранным вами способом организации многоязычности.
--Данные должны быть представлены как минимум на русском и английском языках.
--Предусмотрите возможность расширения списка используемых языков.

create schema bookings_translate;


create table bookings_translate.city_translate(
	city varchar(20),
	en  varchar(20),
	ru  varchar(20)
);

insert into
	bookings_translate.city_translate(city, en, ru)
values
	('Казань', 'Kazan', 'Казань');

select * from bookings_translate.city_translate;
