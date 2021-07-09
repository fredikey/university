import axios from 'axios'

export const RESPONSE_TIMEOUT = 5000
export const Api = axios.create({
	baseURL: process.env.REACT_APP_SERVER_URL,
	headers: {
		'Content-Type': 'application/json'
	},
	timeout: RESPONSE_TIMEOUT
})
