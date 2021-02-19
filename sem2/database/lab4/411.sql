--Напишите запрос, возвращающий среднюю стоимость авиабилета
--в каждом из классов перевозки. Модифицируйте его таким образом,
--чтобы было видно, какому классу какое значение соответствует.

select
	tf.fare_conditions,
	avg(tf.amount) as price_avg
from
	ticket_flights tf
group by
	tf.fare_conditions



