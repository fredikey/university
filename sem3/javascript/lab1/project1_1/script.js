
const MAX_DAYS_AMOUNT = 100

const promptValue = prompt(`Enter number of passed days (should be lower than ${MAX_DAYS_AMOUNT})`)
const value = Number(promptValue)
if (Number.isInteger(value) && value >= 0 && value < MAX_DAYS_AMOUNT) {
	const res = MAX_DAYS_AMOUNT - value
	console.log(`${res} day${res === 1 ? '' : 's'} left`)
} else {
	// handle wrong value
	alert(`${promptValue} is incorrect`)
}
