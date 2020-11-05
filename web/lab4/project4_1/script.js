// Напишите скрипт, который будет (используя регулярные выражения)
// •	искать строки url. Учитывайте протоколы http и https.
// (http://example.example/example/example.example?param1=value1&param2=value2,
// https://www.example.example и т. п.)
//
// •	искать email (name@domen.zone), обратите внимание на то, какие символы можно использовать в именах.


// URL Regex

// check protocol http:// | https:// = http(s?):\/\/
// check hostname = (?!(\.|-))(([^\s$/?#])+)
// check domain name = \.([a-z0-9-]+)
// check port = (:\d{4,5})?
// check url parts, query params and other =  (\/(\S+)?)?
// Tests - https://regexr.com/5fks9
const urlRegex = /http(s?):\/\/(?!(\.|-))(([^\s$/?#])+)\.([a-z0-9-]+)(:\d{4,5})?(\/(\S+)?)?/
const checkUrl = (url) => {
	return urlRegex.test(url)
}


// Email Regex

// check name (first letter, last letter, symbols in a row .,-,_,+) =
// [a-zA-Z0-9!#$%&'*/=?^‘{|}~]+((\.|-|_|\+)[a-zA-Z0-9!#$%&'*/=?^‘{|}~]+)*
// check domain =  @([\w-]+\.[\w.]{2,})

// Tests - https://regexr.com/5fl23
const emailRegex = /[a-zA-Z0-9!#$%&'*/=?^‘{|}~]+((\.|-|_|\+)[a-zA-Z0-9!#$%&'*/=?^‘{|}~]+)*@([\w-]+\.[\w.]{2,})/
const checkEmail = (url) => {
	return emailRegex.test(url)
}
