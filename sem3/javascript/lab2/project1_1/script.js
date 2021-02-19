// Ex. 1
// Написать скрипт, который создает массив, в котором будет записана таблица умножения.
// Например, при обращении к ячейке с индексами [5][5] мы должны получить 25.
// Корректно обработать попытку обращения к несуществующим элементам массива.

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
	
	return res
}

const TABLE_SIZE = 9
class MultipleTable {
	constructor() {
		this._size = TABLE_SIZE
		this._table = generateTable(this._size);
	}
	
	_isValidProp (val) {
		return val > 0 && val <= this._size
	}
	
	getValue (i, j) {
		if (this._isValidProp(i) && this._isValidProp(j)) {
			return this._table[i - 1][j - 1]
		} else {
			console.error(new Error('Error: Array out of bounds'))
		}
	}
}

const table = new MultipleTable();

console.log(table.getValue(4, 3));
console.log(table.getValue(12, 4));
console.log(table.getValue(5, 5));
console.log(table.getValue(7, 8));
console.log(table.getValue(9, 9));
