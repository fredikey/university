const swap = (nums: number[], i: number, j: number) => {
	let temp = nums[i]
	nums[i] = nums[j]
	nums[j] = temp
}

const reverse = (nums: number[], from: number, to: number) => {
	for (let i = from, j = to; i < j; i++, j--) {
		swap(nums, i, j)
	}
}

export const nextPermutation = (nums: number[]) => {
	if (!nums || !nums.length) {
		return []
	}

	for (let i = nums.length - 1; i > 0; i--) {
		if (nums[i] > nums[i - 1]) {
			let j = i
			while (nums[j + 1] > nums[i - 1]) {
				j++
			}

			swap(nums, i - 1, j)
			reverse(nums, i, nums.length - 1)

			return nums
		}
	}

	reverse(nums, 0, nums.length - 1)
	return nums
}
