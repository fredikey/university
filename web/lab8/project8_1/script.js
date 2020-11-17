// Взяв за основу классы плоских геометрических фигур, сделанных в 6
// лабораторной работе — создайте инструмент для их рисования.
// Например, расположите рядом с канвасом панель управления, на которой
// будут кнопки, позволяющие нарисовать заданные фигуры.
// Данные для рисования фигур можно получать либо при помощи prompt,
// либо взяв их из события onClick по канвасу.

class Figure {
	// expect
	// params: {key: number} where is key param of figure like width / height / length
	constructor(params) {
		this.params = params
		
		// map this.params.key to this.key
		Object.keys(params).map(key => {
			this[key] = params[key]
		})
	}
	getParams () {
		return this.params
	}
	_getCenter () {}
	
	getDistance (obj) {
		const posA = obj._getCenter()
		const posB = this._getCenter()
		return Math.round(Math.sqrt((posA.x - posB.x)**2 + (posA.y - posB.y)**2))
	}
}

class Point extends Figure {
	constructor(position) {
		super({position});
	}
	_getCenter () {
		return this.position
	}
}

class Line extends Figure {
	constructor(positionA, positionB) {
		super({positionA, positionB});
	}
	_getCenter () {
		const {positionA, positionB} = this
		return {
			x: (positionA.x - positionB.x) / 2,
			y: (positionA.y - positionB.y) / 2
		}
	}
}

class Circle extends Figure {
	constructor(position, radius) {
		super({position, radius});
	}
	_getCenter () {
		return this.position
	}
}

class Ellipse extends Figure {
	constructor(position, radiusA, radiusB) {
		super({position, radiusA, radiusB});
	}
	_getCenter () {
		return this.position
	}
}

class Rectangle extends Figure {
	constructor(positionA, positionB) {
		super({positionA, positionB});
	}
	_getCenter () {
		const {positionA, positionB} = this
		return {
			x: (positionA.x - positionB.x) / 2,
			y: (positionA.y - positionB.y) / 2
		}
	}
}

const isInvalid = (obj) => {
	console.log(obj)
	return Object.keys(obj).map(key => obj[key]).some(item => Number.isNaN(item))
}

const promptValues = (...keys) => {
	const res = keys.reduce((acc, currKey) => {
		const value = prompt(`${currKey}: `)
		acc[currKey] = Number(value !== null ? value : undefined)
		return acc
	}, {})

	if (isInvalid(res)) {
		alert('Invalid props')
		return
	}
	
	return res
}

document.addEventListener("DOMContentLoaded", () => {
	let cnv = document.getElementById('canvas');
	let ctx = cnv.getContext('2d');
	cnv.width = 1000;
	cnv.height = 600;
	
	document.getElementById('control-point').addEventListener('click', () => {
		const val = promptValues('x', 'y')
		if (!val) return;
		
		new Point({x: val.x, y: val.y})
		ctx.beginPath();
		ctx.arc(val.x, val.y, 1, 0, 2 * Math.PI);
		ctx.fill();
	})
	
	document.getElementById('control-line').addEventListener('click', () => {
		const val = promptValues('x1', 'y1', 'x2', 'y2')
		if (!val) return;
		
		new Line({x: val.x1, y: val.y1}, {x: val.x2, y: val.y2})
		ctx.beginPath();
		ctx.moveTo(val.x1, val.y1);
		ctx.lineTo(val.x2, val.y2);
		ctx.stroke();
	})
	
	document.getElementById('control-rectangle').addEventListener('click', () => {
		const val = promptValues('x1', 'y1', 'x2', 'y2')
		if (!val) return;
		
		new Rectangle({x: val.x1, y: val.y1}, {x: val.x2, y: val.y2})
		ctx.strokeStyle = "#333";
		ctx.lineWidth = 2;
		ctx.strokeRect(val.x1, val.y1, val.x2, val.y2);
	})
	
	document.getElementById('control-circle').addEventListener('click', () => {
		const val = promptValues('x', 'y', 'radius')
		if (!val) return;
		
		new Circle({x: val.x, y: val.y}, val.radius)
		ctx.beginPath();
		ctx.ellipse(val.x, val.y, val.radius, val.radius, 0, 0, 2 * Math.PI);
		ctx.stroke();
	})
	
	document.getElementById('control-ellipse').addEventListener('click', () => {
		const val = promptValues('x', 'y', 'radiusX', 'radiusY')
		if (!val) return;
		
		new Ellipse({x: val.x, y: val.y}, val.radiusX, val.radiusY)
		ctx.beginPath();
		ctx.ellipse(val.x, val.y, val.radiusX, val.radiusY, 0, 0, 2 * Math.PI);
		ctx.stroke();
	})
	
});
