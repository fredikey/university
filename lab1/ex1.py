from math import *
try:
	a = float(input('a: '))
	b = float(input('b: '))
	tmp = 2 * b - a
	z1 = (sin(a) + cos(tmp)) / (cos(a) - sin(tmp))
	z2 = (1 + sin(2 * b)) / cos(2 * b)
	print(z1)
	print(z2)
except ValueError:
	print('Это не число. Выходим.')
