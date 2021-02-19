// expect number
const generateTable = (size) => {
	
	// generate base values (array from 1 to {size})
	const baseTable = []
	for (let i = 1; i <= size; i++) {
		baseTable.push(i)
	}
	
	// pull data into table
	const res = []
	for (let i = 0; i < baseTable.length; i++) {
		const modifier = baseTable[i]
		res.push(baseTable.map(item => item * modifier))
	}
	// log table
	res.map(item => {
		console.log(item.join(' '))
	})
}


generateTable(9)
