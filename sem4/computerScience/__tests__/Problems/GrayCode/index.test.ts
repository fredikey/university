import { grayCode } from '../../../Problems/GrayCode'

describe('Tasks / GrayCode', () => {
	const INPUT_1 = 2
	const OUTPUT_1 = [0, 1, 3, 2]

	const INPUT_2 = 1
	const OUTPUT_2 = [0, 1]

	it.each`
		input      | output
		${INPUT_1} | ${OUTPUT_1}
		${INPUT_2} | ${OUTPUT_2}
	`('$input to $output', ({ input, output }) => {
		expect(grayCode(input)).toEqual(output)
	})
})
