type SortingFunc = (arr: number[]) => number[]

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

// Insertion Sort
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
