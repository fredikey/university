// Function to count the number of inversions
// during the merge process
function mergeAndCount(arr: number[], l: number, m: number, r: number) {
	// Left subarray
	let left = []
	for (let i = l; i < m + 1; i++) {
		left.push(arr[i])
	}

	// Right subarray
	let right = []
	for (let i = m + 1; i < r + 1; i++) {
		right.push(arr[i])
	}
	let i = 0,
		j = 0,
		k = l,
		swaps = 0
	while (i < left.length && j < right.length) {
		if (left[i] <= right[j]) {
			arr[k++] = left[i++]
		} else {
			arr[k++] = right[j++]
			swaps += m + 1 - (l + i)
		}
	}
	while (i < left.length) {
		arr[k++] = left[i++]
	}
	while (j < right.length) {
		arr[k++] = right[j++]
	}
	return swaps
}

// Merge sort function
function mergeSortAndCount(arr: number[], l: number, r: number) {
	// Keeps track of the inversion count at a
	// particular node of the recursion tree
	let count = 0
	if (l < r) {
		let m = Math.floor((l + r) / 2)

		// Total inversion count = left subarray count
		// + right subarray count + merge count

		// Left subarray count
		count += mergeSortAndCount(arr, l, m)

		// Right subarray count
		count += mergeSortAndCount(arr, m + 1, r)

		// Merge count
		count += mergeAndCount(arr, l, m, r)
	}
	return count
}

export const calcInversions = (arr: number[]) => {
	return mergeSortAndCount(arr, 0, arr.length - 1)
}
