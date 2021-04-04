import path from 'path'
import fs from 'fs'
import { bubbleSort, insertionSort, selectSort } from '../index'
import { performance } from 'perf_hooks'

const readInputFile = async (count: number): Promise<number[]> => {
	const inputPath = path.join(__dirname, 'input', `input-${count}.txt`)
	const data = await fs.promises.readFile(inputPath, 'utf-8')

	return data.split(',').map((item) => Number(item))
}

const measureSortTime = (func: () => void) => {
	const startTime = performance.now()
	func()
	return Number((performance.now() - startTime).toFixed(2))
}

const SORTING_MAP = {
	select: selectSort,
	insert: insertionSort,
	bubble: bubbleSort
} as const
type SortingKey = keyof typeof SORTING_MAP

const METRIC_COUNT = [10, 100, 1000, 10000, 100000]

type IResult = {
	[Item in SortingKey]?: {
		[val: number]: string
	}
}
const RESULT_MAP: IResult = {}

const processInputFile = async (count: number) => {
	const data = await readInputFile(count)
	Object.keys(SORTING_MAP).map((item) => {
		const key = item as SortingKey
		const obj = RESULT_MAP[key]

		RESULT_MAP[key] = {
			...obj,
			[`${count}`]: measureSortTime(() => {
				SORTING_MAP[key](data)
			})
		}
	})
}

;(async () => {
	await Promise.all(METRIC_COUNT.map((count) => processInputFile(count)))

	console.log(RESULT_MAP)
})()

// Metric in ms
//{
//   select: {
//     '10': 0.07,
//     '100': 1.09,
//     '1000': 2.91,
//     '10000': 78.15,
//     '100000': 7747.64
//   },
//   insert: {
//     '10': 0.04,
//     '100': 1.18,
//     '1000': 3.04,
//     '10000': 109.82,
//     '100000': 10911.28
//   },
//   bubble: {
//     '10': 0.04,
//     '100': 1.6,
//     '1000': 5.84,
//     '10000': 415.55,
//     '100000': 46587.54
//   }
// }
