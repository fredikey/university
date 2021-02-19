--Мигрируйте все данные из старой схемы демонстрационной
--базы в новую из предыдущего упражнения. Добавьте названия
--населенных пунктов на каких-либо других языках.

create table bookings_translate.aircrafts_data as (select * from bookings.aircrafts_data);
create table bookings_translate.tickets as (select * from bookings.tickets);
create table bookings_translate.airports_data as (select * from bookings.airports_data);
create table bookings_translate.boarding_passes as (select * from bookings.boarding_passes);
create table bookings_translate.bookings as (select * from bookings.bookings);
create table bookings_translate.card as (select * from bookings.card);
create table bookings_translate.flights as (select * from bookings.flights);
create table bookings_translate.seats as (select * from bookings.seats);
create table bookings_translate.ticket_flights as (select * from bookings.ticket_flights);


alter table bookings_translate.city_translate add column de varchar(20);

insert into
	bookings_translate.city_translate(city, en, ru, de)
values
	('Москва', 'Moscow', 'Москва', 'Moskau');
