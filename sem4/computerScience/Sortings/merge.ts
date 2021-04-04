import { SortingFunc } from '../utils/types'

// Conceptually, a merge sort works as follows:
//  1. Divide the unsorted list into n sublists,
//  each containing one element (a list of one element is considered sorted).
//  2. Repeatedly merge sublists to produce new sorted
//  sublists until there is only one sublist
//  remaining. This will be the sorted list.

const mergeArrays = (leftArr: number[], rightArr: number[]) => {
	let arr = []

	let leftIdx = 0
	let rightIdx = 0
	while (leftIdx < leftArr.length && rightIdx < rightArr.length) {
		if (rightArr[rightIdx] > leftArr[leftIdx]) {
			arr.push(leftArr[leftIdx])
			leftIdx++
		} else {
			arr.push(rightArr[rightIdx])
			rightIdx++
		}
	}
	while (rightIdx < rightArr.length) {
		arr.push(rightArr[rightIdx])
		rightIdx++
	}

	while (leftIdx < leftArr.length) {
		arr.push(leftArr[leftIdx])
		leftIdx++
	}

	return arr
}

export const mergeSort: SortingFunc = (arr) => {
	if (arr.length <= 1) return arr

	const mid = Math.floor(arr.length / 2)

	const left = mergeSort(arr.slice(0, mid))
	const right = mergeSort(arr.slice(mid))

	return mergeArrays(left, right)
}
