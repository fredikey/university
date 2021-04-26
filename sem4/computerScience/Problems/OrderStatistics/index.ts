import { random } from '../../utils'
// K-ой порядковой статистикой N-элементной последовательности AN называется число AK,
// которое будет стоять на K-ом месте после упорядочивания элементов этой
// последовательности по возрастанию.

// 	Последовательность AN задаётся следующим образом:
// 	A1 = P,
//  Ai = (Ai-1 ⋅ Q) mod V.
type OrderStatisticsFunc = (arr: number[], ...val: number[]) => number

const orderStatisticsHelper: OrderStatisticsFunc = (arr, startIdx, endIdx, k) => {
	// if part-array length smaller than 1
	if (endIdx - startIdx <= 1) return arr[k]

	const midIdx = random(startIdx, endIdx - 1)
	const mid = arr[midIdx]

	console.log(mid, arr)
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

	if (k < i) {
		return orderStatisticsHelper(arr, startIdx, i, k)
	} else if (k > i) {
		return orderStatisticsHelper(arr, i + 1, endIdx, k)
	} else {
		//  if (i === k)
		return arr[k]
	}
}

export const orderStatistics = (arr: number[], k: number) => {
	return orderStatisticsHelper(arr, 0, arr.length, k)
}
