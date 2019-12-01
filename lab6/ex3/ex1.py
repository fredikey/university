import numpy as np
try:
	fi = open("input.txt", mode="rt")
	fo = open("output.txt", mode="wt")
	try:
		# read header
		fi.readline()
		fi.readline()

		# end of reading header
		def make_matrix(row, column, a, b):
			fo.write("Init Matrix\n")
			mtrx = (b - a) * np.random.random(size=(row, column)) + a
			return mtrx


		def print_matrix(mtrx):
			(nRow, nCol) = matrix.shape
			for Row in range(nRow):
				for Col in range(nCol):
					fo.write("{0: 7.3f}\t".format(mtrx[Row][Col]))
				fo.write("\n")
			fo.write("\n")


		def shift_matrix(mtrx, n, axis_type):
			fo.write("Shift Matrix\n")
			return np.roll(mtrx, n, axis_type)


		line = fi.readline().split()
		row_of_matrix = int(line[0])
		column_of_matrix = int(line[1])
		shift = int(line[2])
		axis = int(line[3])

		matrix = make_matrix(row_of_matrix, column_of_matrix, -5, 5)
		print_matrix(matrix)
		newMatrix = shift_matrix(matrix, shift, axis)
		print_matrix(newMatrix)
		fo.write("Shift: {0:} Axis:{1:}\n".format(shift, axis))
	except ValueError:
		print('Это не число. Выходим.')
	finally:
		fi.close()
		fo.close()
except FileNotFoundError:
	print('Файл input.txt не найден')

