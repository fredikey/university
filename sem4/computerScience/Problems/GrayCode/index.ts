// https://leetcode.com/problems/gray-code/

export const grayCode = (num: number) => {
	let list: number[] = [0]
	let stack: number[] = []

	for (let i = 0; i < num; i++) {
		let len = list.length

		for (let j = 0; j < len; j++) {
			stack.push(list[j])
		}

		let inc = Math.pow(2, i)
		while (stack.length > 0) {
			list.push((stack.pop() as number) + inc)
		}
	}

	return list
}
