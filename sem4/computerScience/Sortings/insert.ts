import { SortingFunc } from '../utils/types'

// Insertion Sort
// Builds up the sort by gradually creating a larger left half which is always sorted
export const insertionSort: SortingFunc = (inputArr) => {
	// copy of array
	const arr = [...inputArr]
	// alg
	for (let i = 1; i < arr.length; i++) {
		const currentVal = arr[i]

		// J is an index of element in sorted part (left) of array
		let j
		for (j = i - 1; j >= 0 && currentVal < arr[j]; j--) {
			arr[j + 1] = arr[j]
		}
		// j + 1 cuz it was initialized with i - 1
		arr[j + 1] = currentVal
	}

	return arr
}

// Example [10,4,3,1,2]:
// i=1; currentValue=4; j=0; 4 < 10; -> arr[1] = 10; arr[0] = 4; -> [4,10,3,1,2]
// i=2; currentValue=3; j=1; 3 < 10; -> arr[2] = 10; arr[1] = 3; -> [4,3,10,1,2]
// i=2; currentValue=3; j=0; 3 < 4; -> arr[1] = 4; arr[0] = 3; -> [3,4,10,1,2]
// i=3; currentValue=1; j=2; 1 < 10; -> arr[3] = 10; arr[2] = 1; -> [3,4,1,10,2]
// ...
// i=4; currentValue=2; j=3; 1 < 10; -> arr[4] = 10; arr[2] = 2; -> [1,3,4,2,10]
// ...
// i=4; currentValue=2; j=1; 2 < 3; -> arr[2] = 3; arr[1] = 2; -> [1,2,3,4,10]
// i=4; currentValue=2; j=0; 2 < 1; -> break
// i=5; -> break
// done [1,2,3,4,10]
