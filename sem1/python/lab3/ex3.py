try:

	xb = float(input("XBeg: "))
	xe = float(input("XEnd: "))
	dx = float(input("Dx: "))
	eps = float(input("Eps: "))

	print("+--------+--------+-----+")
	print("I   X    I    Y   I  N  I")
	print("+--------+--------+-----+")
	xt = xb

	while xt <= xe:
		an = xt
		n = 0
		y = an
		while True:
			k = -1 * (xt ** 2) / (n + 1)
			an = an * k
			y = y + an
			n = n + 1
			if abs(an) < eps:
				break
		print("I{0: 7.2f} I{1: 7.3f} I{2: 4} I".format(xt, y, n))
		xt = xt + dx
	print("+--------+--------+-----+")
except ValueError:
	print('Это не число. Выходим.')
