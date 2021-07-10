import classNames from 'classnames'

// classNames
export const cx = classNames

export function renderEllipsis(text: string, count = 25): string {
	if (text.length < count) {
		return text
	}
	return `${text.slice(0, count - 2)}...`
}

export function random(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

export function capitalize(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1)
}
