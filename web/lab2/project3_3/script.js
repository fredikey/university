// Ex. 3
// Написать скрипт, который преобразует русский текст в транслит и выводит его в консоль.
// Скрипт должен запросить у пользователя строку текста (проверить, чтобы она была не пустой),
// перевести ее в транслит и вывести в консоль.
// Нужно сохранять регистр букв.
// Если символ не является кириллическим (цифра, знак и т.п.),
// то его нужно оставить без изменений.
// Правила преобразования в транслит можно взять из ГОСТ 7.79-2000.

const dict = new Map([
	['А',	'A'],
	['Б',	'B'],
	['В',	'V'],
	['Г',	'G'],
	['Д',	'D'],
	['Е',	'E'],
	['Ё',	'E'],
	['Ж',	'ZH'],
	['З',	'Z'],
	['И',	'I'],
	['Й',	'I'],
	['К',	'K'],
	['Л',	'L'],
	['М',	'M'],
	['Н',	'N'],
	['О',	'O'],
	['П',	'P'],
	['Р',	'R'],
	['С',	'S'],
	['Т',	'T'],
	['У',	'U'],
	['Ф',	'F'],
	['Х',	'KH'],
	['Ц',	'TS'],
	['Ч',	'CH'],
	['Ш',	'SH'],
	['Щ',	'SHCH'],
	['Ы',	'Y'],
	['Ь', ''],
	['Э',	'E'],
	['Ю',	'YU'],
	['Я',	'YA'],
])


const translate = () => {
	const str = prompt('Write a string on Russian to transliterate it')
	
	// if str is incorrect, rerun prompt
	if (str === null || str.trim() === '') {
			translate()
	}
	
	let res = ''
	
	// iterate string
	for (const symbol of str) {
		let translated = dict.get(symbol);
		if (!translated) {
			// try upper case
			const upperCased = dict.get(symbol.toUpperCase())
			if (upperCased) translated = upperCased.toLowerCase()
		}
		// put original letter, if symbol has no any translations
		res += translated || symbol
	}
	console.log(res)
}
translate()
