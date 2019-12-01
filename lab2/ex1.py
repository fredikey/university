from math import *
try:
	x = float(input("x: "))
	if x <= -3:
		y = x + 3
	elif -3 < x <= 0:
		y = sqrt(9 - x**2)
	elif 0 < x <= 6:
		y = -x/2 + 3
	else:
		y = x - 6
	print(x, " - X ", y, " - Y")
except ValueError:
	print('Это не число. Выходим.')
