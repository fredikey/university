import { SortingFunc } from '../utils/types'

// Insertion Sort
export const insertionSort: SortingFunc = (inputArr) => {
	// copy of array
	const arr = [...inputArr]
	// alg
	for (let i = 1; i < arr.length; i++) {
		for (let j = i - 1; j >= 0; j--) {
			const leftEl = arr[j]
			const rightEl = arr[j + 1]

			if (leftEl > rightEl) {
				arr[j + 1] = leftEl
				arr[j] = rightEl
			}
		}
	}
	return arr
}
