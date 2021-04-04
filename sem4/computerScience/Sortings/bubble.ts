import { SortingFunc } from '../utils/types'

// Bubble Sort
export const bubbleSort: SortingFunc = (inputArr) => {
	// copy of array
	const arr = [...inputArr]
	// alg
	// uses to check when should exit from cycle
	let swapped = true
	while (swapped) {
		swapped = false
		for (let i = 0; i < arr.length; i++) {
			const leftEl = arr[i]
			const rightEl = arr[i + 1]

			// swap elements and mark swapped as true to launch a new cycle iteration
			if (leftEl > rightEl) {
				arr[i + 1] = leftEl
				arr[i] = rightEl

				swapped = true
			}
		}
	}
	return arr
}
