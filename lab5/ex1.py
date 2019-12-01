import numpy as np

try:

	def make_matrix(row, column, a, b):
		print('Init Matrix')
		mtrx = (b - a) * np.random.random(size=(row, column)) + a
		return mtrx


	def print_matrix(mtrx):
		print('Print Matrix')
		(nRow, nCol) = matrix.shape
		for Row in range(nRow):
			for Col in range(nCol):
				print("{0: 7.3f}".format(mtrx[Row][Col]), end=" ")
			print()
		print()


	def change_matrix(mtrx, n, axis_type):
		print("change matrix")
		return np.roll(mtrx, n, axis_type)


	row_of_matrix = int(input("Count of row matrix: "))
	column_of_matrix = int(input("Count of column matrix: "))
	shift = int(input("Count of shift: "))
	axis = int(input("Chose axis (0 - column, 1 - row): "))
	# type 1 - row
	# type 0 - column

	matrix = make_matrix(row_of_matrix, column_of_matrix, -5, 5)
	print_matrix(matrix)
	newMatrix = change_matrix(matrix, shift, axis)
	print_matrix(newMatrix)
except ValueError:
	print('Это не число. Выходим.')
