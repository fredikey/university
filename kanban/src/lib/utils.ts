
const renderSeconds = (seconds: number, minutes?: number) => {
	const val = minutes ? seconds - minutes * 60 : seconds
	return val !== 0 ? `${val} sec` : undefined
}

const renderMinutes = (minutes: number, hours?: number) => {
	const val = hours ? minutes - hours * 60 : minutes
	return val !== 0 ? `${val} min` : undefined
}

const renderHours = (hours: number, days?: number) => {
	const val = days ? hours - days * 24 : hours
	return val !== 0 ? `${val} ${val === 1 ? 'hour' : 'hours'}` : undefined
}
const renderDays = (days: number) => {
	return days !== 0 ? `${days} ${days === 1 ? 'day' : 'days'}` : undefined
}
const diff = (...datesPart: (undefined | string)[]) => {
	return datesPart.filter(item => item !== undefined).join(', ')
}
export const dateDiff = (start: number, end: number): string => {
	const seconds = Math.round((end - start) / 1000)
	
	const minutes = Math.floor(seconds / 60)
	if (minutes === 0) {
		return `${seconds} sec`
	}
	
	const hours = Math.floor(minutes / 60)
	if (hours === 0) {
		return diff(renderMinutes(minutes), renderSeconds(seconds, minutes))
	}
	
	const days = Math.floor(hours / 24)
	if (days === 0) {
		return diff(renderHours(hours), renderMinutes(minutes, hours), renderSeconds(seconds, minutes))
	} else {
		return diff(renderDays(days), renderHours(hours, days), renderMinutes(minutes, hours), renderSeconds(seconds, minutes))
	}
}

export const formatDate = (timestamp: number) => {
	const date = new Date(timestamp);
	return date.toLocaleString('en-US', { year: 'numeric', day: 'numeric', month: 'short', hour: 'numeric', minute: 'numeric', hour12: true })
}
