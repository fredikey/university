export const generateArray: (...val: number[]) => number[] = (q, v, p, n) => {
	const arr = [p]
	for (let i = 1; i < n; i++) {
		arr[i] = (arr[i - 1] * q) % v
	}
	return arr
}
