try:
	x = float(input("X: "))
	y = float(input("Y: "))
	r1 = float(input("R1: "))
	r2 = float(input("R2: "))
	tmp = (x**2 + y**2)
	if x <= 0 and y >= 0 and tmp <= r1**2:
		print('great shot')
	elif x >= 0 and y <= 0 and r1**2 <= tmp <= r2**2:
		print('great shot')
	else:
		print('miss')
except ValueError:
	print('Это не число. Выходим.')
