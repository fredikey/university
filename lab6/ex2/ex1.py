from random import *
try:
	fi = open("input.txt", mode="rt")
	fo = open("output.txt", mode="wt")
	try:
		# read header
		fi.readline()
		fi.readline()
		# end of reading header
		line = fi.readline().split()
		n = int(line[0])
		a = float(line[1])
		b = float(line[2])
		if n > 30:
			n = 30
		elif n < 5:
			n = 5
		arr = []
		fo.write("Initial array\n")
		for i in range(n):
			arr.append(uniform(-5, 5))
			fo.write("{0: 7.3f}\t".format(arr[i]))

		fo.write("\n")

		iMax = 0
		if a > b:
			tmp = a
			a = b
			b = tmp
		count = 0
		for i in range(n):
			if arr[iMax] < arr[i]:
				iMax = i
			if a <= arr[i] <= b:
				count += 1
		fo.write("Count: {0: }\n".format(count))
		fo.write("\n")

		sumArr = 0
		for i in range(iMax + 1, n):
			sumArr += arr[i]
		fo.write("Sum: {0: .2f}\n".format(sumArr))
		fo.write("\n")

		sortedArray = sorted(arr, key=abs, reverse=True)
		fo.write("sorted Array\n")
		for i in range(n):
			fo.write("{0: 7.3f}\t".format(sortedArray[i]))
	except ValueError:
		print('Это не число. Выходим.')
	finally:
		fi.close()
		fo.close()
except FileNotFoundError:
	print('Файл input.txt не найден')
