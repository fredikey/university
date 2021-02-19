// Ex. 1
// Написать функцию, которая будет определять является ли фраза(слово),
// введенная пользователем палиндромом.
// Пользователь вводит фразу при помощи prompt, ответ получает alert.

const reverseString = (str) => {
	return str.split('').reverse().join('')
}

// remove all special symbols and make all letters lower case
const specialSymbols = [' ', '.', '!', ',', ';', '"', '-', '(', ')']
const formatString = (str) => {
	let res = ''
	for (const symbol of str) {
		if (!specialSymbols.includes(symbol)) {
			res += symbol.toLowerCase()
		}
	}
	return res
}
const promptIsPalindrome = () => {
	const str = prompt('Write a string')
	
	// handle case when prompt was closed and str !== ''
	// rerun prompt window
	if (str === null || str.trim() === '') {
		promptIsPalindrome()
		return;
	}
	
	// alg: determine is string palindrome
	const formattedStr = formatString(str)
	const len = formattedStr.length
	let left;
	let right;
	// handle odd and even numbers different ways
	if (len % 2 === 1) {
		const partSize = (len - 1) / 2
		left = formattedStr.slice(0, partSize)
		right = formattedStr.slice(partSize + 1, len)
	} else {
		const partSize = len / 2
		left = formattedStr.slice(0, partSize)
		right = formattedStr.slice(partSize, len)
	}

	// check and log
	if (left === reverseString(right)) {
		alert(`${str} is palindrome!!`)
	} else {
		alert(`${str} is not palindrome (0(9(`)
	}
	
}

promptIsPalindrome()
