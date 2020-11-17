
// Сделать игру «поймай крота».


function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

document.addEventListener("DOMContentLoaded", () => {
	const container = document.getElementById('container')
	let isCaught = false
	
	container.addEventListener('click', (evt) => {
		// User won
		if (evt.target.className === 'box-pic') {
			isCaught = true
			document.querySelector('.title').classList.add('visible')
		}
	})
	
	const moleEl = '<img class="box-pic" src="./krot.png" alt="krot">'
	const runMole = () => {
		setTimeout(() => {
			const moleBoxId = random(1, 9)
			const boxElement = document.querySelector(`[data-id="${moleBoxId}"]`)
			boxElement.innerHTML = moleEl
			
			setTimeout(() => {
				if (!isCaught) {
					boxElement.innerHTML = ''
					runMole()
				}
			}, 1000)
		}, 1000)
	}
	
	runMole()
})
