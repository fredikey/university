from math import *
from random import uniform
import turtle as tr

r1 = float(input("R1: "))
r2 = float(input("R2: "))
if r1 > r2:
	tmp = r2
	r2 = r1
	r1 = r2

def func_2(x, y):
	tmp = (x ** 2 + y ** 2)
	flag = 0
	if x <= 0 and y >= 0 and tmp <= r1 ** 2:
		flag = 1
	elif x >= 0 and y <= 0 and r1 ** 2 <= tmp <= r2 ** 2:
		flag = 1
	return flag


# инициализация графика
aX = [-5, 5]
aY = [-5, 5]
Dx = 300
Dy = Dx / ((aX[1] - aX[0]) / (aY[1] - aY[0]))

tr.setup(Dx, Dy, 200, 200)
tr.reset()

NMax = 10000

tr.setworldcoordinates(aX[0], aY[0], aX[1], aY[1])
tr.title("laba")
tr.width(2)
tr.ht()
tr.tracer(0, 0)

# DRAWING func

tr.up()
min_fun = 0

for n in range(NMax):
	x = uniform(aX[0], aX[1])
	y = uniform(aY[0], aY[1])
	tr.goto(x, y)
	if func_2(x, y) != 0:
		tr.dot(3, 'green')
		min_fun += 1
	else:
		tr.dot(3, '#ffccff')

tr.color('blue', 'blue')

# DRAWING AXIS
# X
tr.up()
tr.goto(aX[0], 0)
tr.down()
tr.goto(aX[1], 0)

# Y
tr.up()
tr.goto(0, aY[1])
tr.down()
tr.goto(0, aY[0])

# labels
tr.up()
for x in range(aX[0], aX[1]):
	tr.goto(x, 0.1)
	tr.down()
	tr.goto(x, 0)
	tr.up()
	tr.sety(-0.4)
	coords = str(x)
	tr.write(coords)

for y in range(aY[0], aY[1]):
	tr.goto(0, y)
	tr.down()
	tr.goto(0.1, y)
	tr.up()
	tr.setx(0.2)
	coords = str(y)
	tr.write(coords)


sf = (aX[1] - aX[0])*(aY[1] - aY[0])*min_fun/NMax
s = (pi*r1**2 + pi*(r2**2 - r1**2))/4
tr.goto(2, 2)
meseg = "N = {0: 8d}\nNf = {1: 8d}\nSf = {2: 8.2f}\nS = {3: 8.2f}".format(NMax, min_fun, sf, s)
tr.write(meseg, font=("Arial", "12", "bold"))
tr.done()
