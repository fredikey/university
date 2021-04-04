import { binarySearch } from '../../Searching'

describe('Searching Module', () => {
	const ARR_1 = [1, 2, 2, 3, 5, 12, 14, 23, 123, 132, 213, 412, 512]
	const ARR_1_VALUE = 3
	const ARR_1_VALUE_IDX = 3

	const ARR_2 = [1, 2, 2, 3, 5, 12, 14, 23, 123, 132, 213, 412, 512]
	const ARR_2_VALUE = 100
	const ARR_2_VALUE_IDX = -1

	const ARR_3 = [1, 2, 2, 3, 5, 12, 14, 23, 123, 132, 213, 412, 512]
	const ARR_3_VALUE = 213
	const ARR_3_VALUE_IDX = 10

	describe('Binary search', () => {
		it.each`
			arr      | value          | res
			${ARR_1} | ${ARR_1_VALUE} | ${ARR_1_VALUE_IDX}
			${ARR_2} | ${ARR_2_VALUE} | ${ARR_2_VALUE_IDX}
			${ARR_3} | ${ARR_3_VALUE} | ${ARR_3_VALUE_IDX}
		`('$input to $output', ({ arr, value, res }) => {
			expect(binarySearch(arr, value)).toEqual(res)
		})
	})
})
