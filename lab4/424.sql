--Количество рейсов, принятых конкретным аэропортом за
--каждый день, — довольно востребованный запрос.
--Напишите представление данного запроса для аэропорта
--города Барнаул (BAX).

create view
	flight_counts_bax as
	select
		PlzWork.cur_date,
		(
			select
				count(*) as flightsCounts
			from
				flights f
			where
				(f.arrival_airport = 'BAX' and cast(f.actual_arrival as date) = PlzWork.cur_date)
		)
	from (
		select
			cast(f.actual_arrival as date) as cur_date
		from
			 flights f
		where
			f.status = 'Arrived'
		group by
			cur_date
	) as PlzWork

	order by
		PlzWork.cur_date



