--Постоянные клиенты могут бесплатно провозить с собой животных.
----Добавьте в ранее созданную таблицу постоянных клиентов
----информацию о перевозке домашних животных.
CREATE TABLE card (
	card_no varchar(10) PRIMARY KEY,
	passenger_id varchar(20) not null,
	passenger_name text not null,
	contact_data json,
	discount numeric(10,2),
	free_animals boolean default false not null
);
