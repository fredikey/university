import { SortingFunc } from '../utils/types'

// Bubble Sort
// A sorting algorithm where the largest values bubble up to the top (to end of array)
export const bubbleSort: SortingFunc = (inputArr) => {
	// copy of array
	const arr = [...inputArr]
	// alg
	for (let i = arr.length; i > 0; i--) {
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				// swap left and right elements
				const tmp = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = tmp
			}
		}
	}
	return arr
}
// Example [10,4,3]:
// i=3; j=0; 0 < 2; [4,10,3]
// i=3; j=1; 1 < 2; [4,3,10]
// i=3; j=2; 2 < 2; break
// i=2; j=0; 0 < 1; [3,4,10];
// i=2; j=1; 1 < 1; break
// i=1; j=0; 0 < 0; break
// i=0 break
// done
