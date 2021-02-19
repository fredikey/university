from math import *
try:
	fi = open("input.txt", mode="rt")
	fo = open("output.txt", mode="wt")
	try:
		# read header
		fi.readline()
		fi.readline()
		# end of reading header
		line = fi.readline().split()
		a = float(line[0])
		b = float(line[1])
		tmp = 2 * b - a
		z1 = (sin(a) + cos(tmp)) / (cos(a) - sin(tmp))
		z2 = (1 + sin(2 * b)) / cos(2 * b)

		fo.write("# z1  z2\n")
		fo.write("# ------\n")
		fo.write("{0: .2f}{1: .2f}".format(z1, z2))
	except ValueError:
		print('Это не число. Выходим.')
	finally:
		fi.close()
		fo.close()
except FileNotFoundError:
	print('Файл input.txt не найден')
