import { bubbleSort, insertionSort, selectSort } from '../../Sortings'

describe('Sorting Module', () => {
	const ARR_1 = [2, 123, 3, 2, 1, 23, 14, 5, 12, 213, 412, 12, 132, 512]
	const ARR_RES_1 = [1, 2, 2, 3, 5, 12, 12, 14, 23, 123, 132, 213, 412, 512]

	const ARR_2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
	const ARR_RES_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

	const ARR_3 = [1, 3, 2, 6, 5, 23, 122, 4, 2, 3, 6, 45, 23, 12, 89, 75, 32, 543]
	const ARR_RES_3 = [1, 2, 2, 3, 3, 4, 5, 6, 6, 12, 23, 23, 32, 45, 75, 89, 122, 543]

	describe('Insertion sort', () => {
		it.each`
			input    | output
			${ARR_1} | ${ARR_RES_1}
			${ARR_2} | ${ARR_RES_2}
			${ARR_3} | ${ARR_RES_3}
		`('$input to $output', ({ input, output }) => {
			expect(insertionSort(input)).toEqual(output)
		})
	})

	describe('Bubble sort', () => {
		it.each`
			input    | output
			${ARR_1} | ${ARR_RES_1}
			${ARR_2} | ${ARR_RES_2}
			${ARR_3} | ${ARR_RES_3}
		`('$input to $output', ({ input, output }) => {
			expect(bubbleSort(input)).toEqual(output)
		})
	})

	describe('Select sort', () => {
		it.each`
			input    | output
			${ARR_1} | ${ARR_RES_1}
			${ARR_2} | ${ARR_RES_2}
			${ARR_3} | ${ARR_RES_3}
		`('$input to $output', ({ input, output }) => {
			expect(selectSort(input)).toEqual(output)
		})
	})
})
