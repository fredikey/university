function formatDate(date) {
	let dd = date.getDate();
	let mm = date.getMonth() + 1;
	if (mm < 10) {
		mm = '0' + mm
	}
	if (dd < 10) {
		dd = '0' + dd
	}
	const yyyy = date.getFullYear();
	return `${dd}.${mm}.${yyyy}`
}

function isMyDay(date) {
	const now = new Date()
	if (!date) {
		return false
	}
	return (now.getDate() === date.getDate() && now.getMonth() === date.getMonth() && now.getFullYear() === date.getFullYear())
}

export {formatDate, isMyDay}
