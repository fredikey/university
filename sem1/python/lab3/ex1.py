from math import *
try:
	xb = float(input("Xbeg: "))
	xe = float(input("Xend: "))
	dx = float(input("Dx: "))
	x = xb
	print("Xbeg={0: 7.2f} Xend={1: 7.2f}".format(xb, xe))
	print("Dx={0: 7.2f}".format(dx))
	print("+--------+--------+")
	print("I   X    I    Y   I")
	print("+--------+--------+")
	while x <= xe:
		if x <= -3:
			y = x + 3
		elif -3 < x <= 0:
			y = sqrt(9 - x**2)
		elif 0 < x <= 6:
			y = -x/2 + 3
		else:
			y = x - 6
		print("I{0: 7.2f} I{1: 7.2f} I".format(x, y))
		x += dx
	print("+--------+--------+")
except ValueError:
	print('Это не число. Выходим.')
