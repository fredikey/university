--Для составления рейтинга аэропортов учитывается суточная
--пропускная способность, т. е. среднее количество вылетевших из него и
--прилетевших в него за сутки пассажиров.

--Выведите 10 аэропортов с наибольшей суточной пропускной способностью,
--упорядоченных по убыванию данной величины.

select
	ad.airport_code,
	(
		select (
			select
				avg(flightsCounts)
			from (
				select (
					select
						count(*) as flightsCounts
					from
						flights f
							join boarding_passes bp on
								-- add all registered passengers
								bp.flight_id = f.flight_id
					where
						(f.arrival_airport = ad.airport_code and cast(f.actual_arrival as date) = PlzWork.cur_date) or
						(f.departure_airport = ad.airport_code and cast(f.actual_departure as date) = PlzWork.cur_date)
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
			) as Temp
		)
	) as AirportAvg
from
	airports_data ad
group by
	ad.airport_code
order by
	AirportAvg desc
limit 10;
