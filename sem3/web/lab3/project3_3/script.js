// Ex. 3
// Напишите функцию, которая будет клонировать массив
// даже если массив «многомерный».

let a = 10;
let b = 20;
a = b;
b = 200;
console.log(a)

let a_arr = [10];
let b_arr = [10];
a_arr = b_arr
b_arr[0] = 200
console.log(a_arr)


const deepCloneArray = (arr) => {
	return arr.map(item => {
		return Array.isArray(item) ? deepCloneArray(item) : item
	})
}

let a_arr2 = [10];
let b_arr2 = [10];
a_arr2 = deepCloneArray(b_arr2)
b_arr2[0] = 200
console.log(a_arr2)
