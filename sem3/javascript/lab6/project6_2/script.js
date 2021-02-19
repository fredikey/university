// Написать классы для описания геометрических фигур на плоскости
// (точка, прямая, окружность, эллипс, прямоугольник).
// В классах должны присутствовать методы для получения
// всех параметров фигуры и вычисления расстояния между центрами фигур.
// Используйте наследование в том случае, если это уместно.
// Должна быть возможность задать параметры фигуры и ее положение.

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

const point = new Point({x: 0, y: 100});
const line = new Line({x: 0, y: 100}, {x: 0, y: 500});
const circle = new Circle({x: 50, y: 100}, 10);
const ellipse = new Ellipse({x: 100, y: 100}, 10, 50);
const rectangle = new Rectangle({x: 0, y: 0}, {x: 300, y: 500})

console.log('Point', point.getParams())
console.log('Line', line.getParams())
console.log('Circle', circle.getParams())
console.log('Ellipse', ellipse.getParams())
console.log('Rectangle', rectangle.getParams())

console.log('---- Distance -----')
console.log('Point between line', point.getDistance(line))
console.log('Circle between Ellipse', circle.getDistance(ellipse))
console.log('Rectangle between line', rectangle.getDistance(line))
console.log('Point between Circle', point.getDistance(circle))
console.log('Ellipse between line', ellipse.getDistance(line))
console.log('Rectangle between Circle', rectangle.getDistance(circle))
