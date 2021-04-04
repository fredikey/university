import { SortingFunc } from '../utils/types'

// Select Sort
export const selectSort: SortingFunc = (inputArr) => {
	// copy of array
	const arr = [...inputArr]
	// alg
	for (let i = 0; i < arr.length; i++) {
		// uses to store index of minimal value
		let idx = i
		for (let j = i; j < arr.length; j++) {
			// find index of minimal value
			if (arr[j] < arr[idx]) {
				idx = j
			}
		}
		// swap elements
		if (idx !== i) {
			const tmp = arr[idx]
			arr[idx] = arr[i]
			arr[i] = tmp
		}
	}
	return arr
}
