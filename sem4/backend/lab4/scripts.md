## insert

db.zips.insertMany({[[
{
"_id": "01001",
"city": "AGAWAM",
"loc": [-72.622739, 42.070206],
"pop": 15338,
"state": "MA"
},
{
"_id": "01007",
"city": "BELCHERTOWN",
"loc": [-72.410953, 42.275103],
"pop": 10579,
"state": "MA"
},
{
"_id": "01010",
"city": "BRIMFIELD",
"loc": [-72.188455, 42.116543],
"pop": 3706,
"state": "MA"
},
{
"_id": "01011",
"city": "CHESTER",
"loc": [-72.988761, 42.279421],
"pop": 1688,
"state": "MA"
},
{
"_id": "01008",
"city": "BLANDFORD",
"loc": [-72.936114, 42.182949],
"pop": 1240,
"state": "MA"
},
{
"_id": "01002",
"city": "CUSHMAN",
"loc": [-72.51565, 42.377017],
"pop": 36963,
"state": "MA"
}
]]})

## Find

db.zips.find({state:'RI'}).explain()

db.zips.find({state:'MA'}, {_id: false, loc: false})

## Update
db.zips.find({city: 'HADLEY'})

db.zips.updateMany({city:'HADLEY'}, {$set: {state: 'PA'}})

## Delete
db.zips.deleteOne({_id: "56130"})


## Aggregation

db.zips.aggregate( [
{ $group: { _id: "$state", totalPop: { $sum: "$pop" } } },
{ $match: { totalPop: { $gte: 10*1000*1000 } } }
] )

db.zips.aggregate( [
{ $group: { _id: { state: "$state", city: "$city" }, pop: { $sum: "$pop" } } },
{ $group: { _id: "$_id.state", avgCityPop: { $avg: "$pop" } } }
] )