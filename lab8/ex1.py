from math import *
from random import uniform
import turtle as tr


def func_1(x):
	if x <= -3:
		y = x + 3
	elif -3 < x <= 0:
		y = sqrt(9 - x ** 2)
	elif 0 < x <= 6:
		y = -x / 2 + 3
	else:
		y = x - 6
	return y


def Axis(txy, ax='X'):
	a = txy[0]
	b = txy[1]
	tr.up()
	if (ax == 'X'):
		pb = [a, 0]
		pe = [b, 0]
	else:
		pb = [0, a]
		pe = [0, b]
	tr.goto(pb)
	tr.down()
	tr.goto(pe)


def Mark(txy, ax='X'):
	a = txy[0]
	b = txy[1]
	tr.up()

	for t in range(a, b):
		if (ax == 'X'):
			pb = [t, 0]
			pe = [t, 0.2]
			pw = [t, -0.5]
		else:
			pb = [0, t]
			pe = [0.2, t]
			pw = [0.2, t]
		tr.goto(pb)
		tr.down()
		tr.goto(pe)
		tr.up()
		tr.goto(pw)
		tr.write(str(t))


def Arrow(txy, ax='X'):
	a = [0.1, 0, -0.1]
	b = [-0.1, 0.3, -0.1]
	tr.up()
	tr.goto(0, 0)
	tr.begin_poly()
	for i in range(2):
		tr.goto(a[i], b[i])
	tr.end_poly()  # останавливаем запись
	p = tr.get_poly()  # ссылка на многоугольник
	tr.register_shape("myArrow", p)
	tr.resizemode("myArrow")
	tr.shapesize(1,2,1)
	if (ax == 'X'):  # для оси X
		tr.tiltangle(0)  # угол для формы
		tr.goto(txy[1] + 0.2, 0)  # к месту стрелки
		pw = [int(txy[1]), -1.0]  # место для надписи else:	# для оси Y
	else:
		tr.tiltangle(90)  # новый угол для формы
		tr.goto(0, txy[1] + 0.2)  # к месту стрелки
		pw = [0.2, int(txy[1])]  # место для надписи
	tr.stamp()  # оставить штамп - стрелка
	tr.goto(pw)  # к месту надписи
	tr.write(ax, font=("Arial", 14, "bold"))


def main():
	aX = [-12, 12]  # левая и правая
	aY = [-3, 5]  # нижняя и верхняя
	Dx = 800
	Dy = Dx / ((aX[1] - aX[0]) / (aY[1] - aY[0]))
	tr.setup(Dx, Dy)
	tr.reset()
	Nmax = 1000
	#
	tr.setworldcoordinates(aX[0], aY[0], aX[1], aY[1])
	#
	tr.title("Lab_8_2_l")  # заголовок
	tr.width(2)  # толщина линии
	tr.color("blue", "blue")  # цвет и заливка ^
	tr.ht()	#	невидимая
	tr.tracer(0, 0)  # нет задержек
	Axis(aX, 'X')
	Mark(aX, 'X')
	Arrow(aX, 'fX')
	Axis(aY, 'TY')
	Mark(aY, 'Y')
	Arrow(aY, 'Y1')

	tr.color("green")  # цвет линии
	tr.width(3)  # и толщина
	dx = (aX[1] - aX[0]) / Nmax  # шаг

	# начало
	x = aX[0]
	y = func_1(x)
	if y is None:
		tr.up()
		tr.goto(x, 0)
	else:
		tr.goto(x, y)
		tr.down()
	# рисуем

	while x <= aX[1]:
		x = x + dx
		y = func_1(x)
		if y is None:
			tr.up()
			continue
		else:
			tr.goto(x, y)
			tr.down()

main()
tr.mainloop()
