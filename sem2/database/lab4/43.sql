-- Найдите все самолеты c максимальной дальностью полета:

-- 1) либо больше 10 000 км, либо меньше 4 000 км

select
	*
from
	aircrafts_data
where
	range > 10000 or
	range < 4000;

-- 2) больше 6 000 км, а название не заканчивается на «100».

select
	*
from
	aircrafts_data
where
	range > 6000 and
	right(model::json->>'ru', 3) != '100';
