--Напишите запрос, выдающий список самолетов из демонстрационной базы в формате JSON.
select json_build_object('model', model) from aircrafts;
