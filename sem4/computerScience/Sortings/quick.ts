import { SortingFunc } from '../utils/types'

function quickSortHelper(arr: number[], startIdx: number, endIdx: number) {
	// if part-array length smaller than 1
	if (endIdx - startIdx <= 1) return

	const midIdx = Math.floor((endIdx + startIdx) / 2)
	const mid = arr[midIdx]

	// push mid element to start of array
	const tmp = arr[startIdx]
	arr[startIdx] = arr[midIdx]
	arr[midIdx] = tmp

	// utility variable
	let i = startIdx
	for (let j = startIdx + 1; j < endIdx; j++) {
		if (arr[j] < mid) {
			i++
			const tmp = arr[j]
			arr[j] = arr[i]
			arr[i] = tmp
		}
	}

	if (i !== startIdx) {
		const tmp = arr[startIdx]
		arr[startIdx] = arr[i]
		arr[i] = tmp
	}

	quickSortHelper(arr, startIdx, i)
	quickSortHelper(arr, i + 1, endIdx)
}
// Quick Sort
export const quickSort: SortingFunc = (inputArr) => {
	// copy of array
	const arr = [...inputArr]
	// alg
	quickSortHelper(arr, 0, arr.length)
	return arr
}
