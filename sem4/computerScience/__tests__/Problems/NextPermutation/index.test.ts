import { nextPermutation } from '../../../Problems/NextPermutation'

describe('Tasks / NextPermutation', () => {
	const INPUT_1 = [1, 2, 3]
	const OUTPUT_1 = [1, 3, 2]

	const INPUT_2 = [3, 2, 1]
	const OUTPUT_2 = [1, 2, 3]

	const INPUT_3 = [1, 1, 5]
	const OUTPUT_3 = [1, 5, 1]

	const INPUT_4 = [1]
	const OUTPUT_4 = [1]

	it.each`
		input      | output
		${INPUT_1} | ${OUTPUT_1}
		${INPUT_2} | ${OUTPUT_2}
		${INPUT_3} | ${OUTPUT_3}
		${INPUT_4} | ${OUTPUT_4}
	`('$input to $output', ({ input, output }) => {
		expect(nextPermutation(input)).toEqual(output)
	})
})
