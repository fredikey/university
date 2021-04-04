import { SearchFunc } from '../utils/types'

// BinarySearch is a search algorithm that finds the position of a target value within a sorted array.
// It compares the target value to the middle element of the array.
// If they are not equal, the half in which the target cannot lie is eliminated and
// the search continues on the remaining half, again taking the middle element to
// compare to the target value, and repeating this until the target value is found.
// If the search ends with the remaining half being empty, the target is not in the array.
// return index of element

export const binarySearch: SearchFunc = (arr, value) => {
	let startIdx = 0
	let endIdx = arr.length

	while (startIdx <= endIdx) {
		let midIdx = Math.floor((endIdx + startIdx) / 2)

		if (value === arr[midIdx]) {
			// Equal
			return midIdx
		} else if (value > arr[midIdx]) {
			// Right side of array
			startIdx = midIdx + 1
		} else if (value < arr[midIdx]) {
			// Left side of array
			endIdx = midIdx - 1
		}
	}

	return -1
}
