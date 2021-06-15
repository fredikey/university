import { SortingFunc } from '../utils/types'

// to heapify a subtree rooted with node i which is an index in array[]
function heapify(array: number[], size: number, i: number) {
	let max = i // initialize max as root
	let left = 2 * i + 1
	let right = 2 * i + 2

	// if left child is larger than root
	if (left < size && array[left] > array[max]) max = left

	// if right child is larger than max
	if (right < size && array[right] > array[max]) max = right

	// if max is not root
	if (max != i) {
		// swap
		let temp = array[i]
		array[i] = array[max]
		array[max] = temp

		// recursively heapify the affected sub-tree
		heapify(array, size, max)
	}
}

export const heapSort: SortingFunc = (inputArr) => {
	// copy of array
	const arr = [...inputArr]

	// alg
	let size = arr.length

	// build heapSort (rearrange array)
	for (let i = Math.floor(size / 2 - 1); i >= 0; i--) heapify(arr, size, i)

	// one by one extract an element from heapSort
	for (let i = size - 1; i >= 0; i--) {
		// move current root to end
		let temp = arr[0]
		arr[0] = arr[i]
		arr[i] = temp

		// call max heapify on the reduced heapSort
		heapify(arr, i, 0)
	}

	return arr
}
