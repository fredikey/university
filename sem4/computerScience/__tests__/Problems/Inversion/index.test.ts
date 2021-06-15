import { calcInversions } from '../../../Problems/Inversion'

describe('Tasks / Inversions', () => {
	const ARR_1 = [1, 1, 2, 3, 8, 6, 1, 9, 9]
	const ARR_RES_1 = 5

	const ARR_2 = [1, 2, 5, 9, 13, 16, 20]
	const ARR_RES_2 = 0

	it.each`
		input    | output
		${ARR_1} | ${ARR_RES_1}
		${ARR_2} | ${ARR_RES_2}
	`('$input to $output', ({ input, output }) => {
		expect(calcInversions(input)).toEqual(output)
	})
})
