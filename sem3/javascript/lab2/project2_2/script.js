// Ex. 2
// Написать скрипт, который запрашивает у пользователя строку (prompt) содержащую разделители «;».
// Далее строку нужно преобразовать в массив (с учетом разделителя).
// Далее каждый элемент массива вывести на новой строке (document.write).
// Пустые строки не должны выводиться.
// Если пользователь жмет отмена,
// вводит пустую строку или строку без разделителей – запросите строку заново.

const promptStr = () => {
	const str = prompt('Write a string which contain dividers ";"')
	// handle case when prompt was closed and str !== ''
	let isStrInvalid = str === null || str.trim() === ''
	let arr;
	if (!isStrInvalid) {
		arr = str.split(';').filter(item => item !== '')
		// handle case when str has no dividers
		isStrInvalid = arr.length === 1
	}
	// rerun prompt window if str is incorrect
	if (isStrInvalid) {
		promptStr()
		return;
	}
	
	// log list items to dom
	arr.map(item => {
		document.write(`<li>${item}</li>`)
	})
}

promptStr()
