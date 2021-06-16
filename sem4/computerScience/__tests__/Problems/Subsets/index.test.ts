import { subsets } from '../../../Problems/Subsets'

describe('Tasks / Subtests', () => {
	const INPUT_1 = [1, 2, 3]
	const OUTPUT_1 = [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

	const INPUT_2 = [0]
	const OUTPUT_2 = [[], [0]]

	it.each`
		input      | output
		${INPUT_1} | ${OUTPUT_1}
		${INPUT_2} | ${OUTPUT_2}
	`('$input to $output', ({ input, output }) => {
		expect(subsets(input)).toEqual(output)
	})
})
