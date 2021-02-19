from random import *
try:
	r1 = float(input("R1: "))
	r2 = float(input("R2: "))
	flag = 0
	print("   X       Y    Res")
	print("-------------------")

	for n in range(10):
		x = uniform(-1, 4)
		y = uniform(-1, 10)
		tmp = (x**2 + y**2)
		if x <= 0 and y >= 0 and tmp <= r1**2:
			flag = 1
		elif x >= 0 and y <= 0 and r1**2 <= tmp <= r2**2:
			flag = 1
		else:
			flag = 0
		print("{0: 7.2f} {1: 7.2f}".format(x, y), end=' ')
		if flag:
			print("YES")
		else:
			print("NO")
except ValueError:
	print('Это не число. Выходим.')
