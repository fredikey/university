import { SortingFunc } from '../utils/types'

// Select Sort
// The selection sort algorithm sorts an array by repeatedly
// finding the minimum element (considering ascending order)
// from unsorted part and putting it at the beginning.
export const selectSort: SortingFunc = (inputArr) => {
	// copy of array
	const arr = [...inputArr]
	// alg
	for (let i = 0; i < arr.length; i++) {
		// uses to store index of minimal value
		let minimalIdx = i
		for (let j = i; j < arr.length; j++) {
			// find index of minimal value
			if (arr[j] < arr[minimalIdx]) {
				minimalIdx = j
			}
		}
		// swap elements
		if (minimalIdx !== i) {
			const tmp = arr[minimalIdx]
			arr[minimalIdx] = arr[i]
			arr[i] = tmp
		}
	}
	return arr
}
