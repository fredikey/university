export const subsets = (nums: number[]) => {
	let output: Array<number[]> = [[]]

	for (let i = 0; i < nums.length; i++) {
		const size = output.length
		for (let j = 0; j < size; j++) {
			const current = output[j]
			output.push([...current, nums[i]])
		}
	}

	return output
}
