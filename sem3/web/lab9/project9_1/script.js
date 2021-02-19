
// Продумать логику приложения для заказа билетов,
// бронирования гостиницы и получения визы.
// Заказ билетов –> бронирование гостиницы –> получение визы.
// Написать приложение, имитирующее процесс с использованием timeout,
// в результате которого должен получиться объект с полями,
// содержащими данные по билету, гостинице и визе.

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

const emulateRequest = (base, data) => {
	return new Promise(resolve => {
		setTimeout(() => {
			sessionStorage.setItem(base, JSON.stringify(data))
			resolve()
		}, 1500 + 500*random(0, 4))
	})
}

const handleFormData = (base, ...keys) => {
	return keys.reduce((acc, currKey) => {
		const inputEl = document.getElementById(`${base}-${currKey}`)
		if (inputEl) {
			acc[currKey] = inputEl.value
		} else {
			console.error('No element')
		}
		
		return acc
	}, {})
}
const showLoader = (btn) => {
	btn.disabled = true
	btn.textContent = 'Loading...'
}
const hideLoader = (btn) => {
	btn.disabled = false
	btn.textContent = 'Submit'
}
const FORM_TICKET = 'form-ticket'
const FORM_BOOKING = 'form-booking'
const FORM_VISA = 'form-visa'

const getInfoItemTemplate = (title, data) => `
	<div class="info-item">
		<h3>${title}</h3>
		<ul>
			${Object.keys(data).map(key => `<li>${key}: ${data[key]}</li>`).join('')}
		</ul>
	</div>`

document.addEventListener("DOMContentLoaded", () => {
	// tickets form
	const ticketsForm = document.getElementById(FORM_TICKET)
	const ticketsFormBtn = document.getElementById(`${FORM_TICKET}-btn`)
	// booking form
	const bookingForm = document.getElementById(FORM_BOOKING)
	const bookingFormBtn = document.getElementById(`${FORM_BOOKING}-btn`)
	// visa form
	const visaForm = document.getElementById(FORM_VISA)
	const visaFormBtn = document.getElementById(`${FORM_VISA}-btn`)
	// info
	const infoPage = document.getElementById('info')
	const showInfo = () => {
		const ticketsInfo = JSON.parse(sessionStorage.getItem(FORM_TICKET))
		const bookingInfo = JSON.parse(sessionStorage.getItem(FORM_BOOKING))
		const visaInfo = JSON.parse(sessionStorage.getItem(FORM_VISA))
		
		infoPage.insertAdjacentHTML('beforeend', getInfoItemTemplate('Ticket', ticketsInfo))
		infoPage.insertAdjacentHTML('beforeend', getInfoItemTemplate('Booking', bookingInfo))
		infoPage.insertAdjacentHTML('beforeend', getInfoItemTemplate('Visa', visaInfo))
		infoPage.style.display = 'flex'
	}
	// Init
	ticketsForm.style.display = 'flex'
	//
	ticketsForm.addEventListener('submit', async (evt) => {
		try {
			evt.preventDefault()
			showLoader(ticketsFormBtn)
			const data = handleFormData(FORM_TICKET, 'name', 'email', 'id', 'birthday', 'ticket')
			await emulateRequest(FORM_TICKET, data)
			ticketsForm.style.display = 'none'
			bookingForm.style.display = 'flex'
		} catch (err) {
			throw err
		} finally {
			hideLoader(ticketsFormBtn)
		}
	})
	
	bookingForm.addEventListener('submit', async (evt) => {
		try {
			evt.preventDefault()
			showLoader(bookingFormBtn)
			const data = handleFormData(FORM_BOOKING, 'startDate', 'endDate', 'hotel')
			await emulateRequest(FORM_BOOKING, data)
			bookingForm.style.display = 'none'
			visaForm.style.display = 'flex'
		} catch (err) {
			throw err
		} finally {
			hideLoader(bookingFormBtn)
		}
	})
	
	visaForm.addEventListener('submit', async (evt) => {
		try {
			evt.preventDefault()
			showLoader(visaFormBtn)
			const data = handleFormData(FORM_VISA, 'visaInfo1', 'visaInfo2')
			await emulateRequest(FORM_VISA, data)
			visaForm.style.display = 'none'
			showInfo()
		} catch (err) {
			throw err
		} finally {
			hideLoader(visaFormBtn)
		}
	})
})
