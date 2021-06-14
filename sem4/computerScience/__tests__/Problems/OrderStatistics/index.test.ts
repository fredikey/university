import { orderStatistics } from '../../../Problems/OrderStatistics'
import { generateArray } from '../../../Problems/OrderStatistics/demo'

describe('Tasks / OrderStatistics', () => {
	const ARR_1 = {
		arr: [3, 1029, 25277, 19523, 11921, 25795, 595, 7483, 10843, 16478, 16030],
		k: 8
	}
	const ARR_RES_1 = 16478

	const ARR_2 = {
		arr: [3],
		k: 1
	}
	const ARR_RES_2 = 3

	const ARR_3 = {
		arr: [10, 3, 6, 9, 2, 4, 15, 23],
		k: 4
	}
	const ARR_RES_3 = 6

	const ARR_4 = {
		arr: [5, -8, 10, 37, 101, 2, 9],
		k: 6
	}
	const ARR_RES_4 = 37

	it('generateArray', () => {
		const res = generateArray(343, 32767, 3, 10)

		expect(res).toEqual([3, 1029, 25277, 19523, 11921, 25795, 595, 7483, 10843, 16478])
	})

	it.each`
		input    | output
		${ARR_1} | ${ARR_RES_1}
		${ARR_2} | ${ARR_RES_2}
		${ARR_3} | ${ARR_RES_3}
		${ARR_4} | ${ARR_RES_4}
	`('$input to $output', ({ input, output }) => {
		expect(orderStatistics(input.arr, input.k)).toEqual(output)
	})
})
