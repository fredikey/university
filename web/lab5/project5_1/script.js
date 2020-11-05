// Сделать цифровые часы
// Для получения объекта DOM используйте document.getElementById().
// Для его изменения innerHtml.

document.addEventListener("DOMContentLoaded", () => {
	// elements
	const timeElement = document.getElementById('time');
	const dateElement = document.getElementById('date');
	
	// date obj
	const date = new Date()
	dateElement.textContent = date.toLocaleString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })
	
	// time operations
	const updateTime = () => {
		date.setTime(date.getTime() + 1000)
		timeElement.textContent = date.toLocaleString('ru-RU', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false })
	}
	updateTime()
	setInterval(updateTime, 1000)
});
