const matchDark = '(prefers-color-scheme: dark)'
export const getDefaultDarkModeValue = () => {
	const val = localStorage.getItem('dark')
	if (val) {
		// set theme (dark or light) if it was defined before
		return JSON.parse(val) as boolean
	}
	// is SystemTheme === dark
	return window.matchMedia && window.matchMedia(matchDark).matches
}
