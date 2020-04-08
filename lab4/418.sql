--Авиакомпания начинает выдавать пассажирам карточки постоянных клиентов.
--Вместо того чтобы каждый раз вводить имя, номер документа и
--контактную информацию, постоянный клиент может указать
--номер своей карты, к которой привязана вся
--необходимая информация. При этом клиенту может предоставляться скидка.

--Измените существующую схему данных так, чтобы иметь возможность
--хранить информацию о постоянных клиентах.

-- add card
CREATE TABLE card (
	card_no varchar(10) PRIMARY KEY,
	passenger_id varchar(20) not null,
	passenger_name text not null,
	contact_data json,
	discount numeric(10,2)
);
-- changes of tickets table
--alter table tickets
--	add column card_no varchar(10) references card(card_no),
--	alter column passenger_id  drop not null,
--	alter column passenger_name  drop not null
