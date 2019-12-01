from random import *
try:

	n = int(input("Count of elements (N <= 30), N:"))
	if n > 30:
		n = 30
	elif n < 5:
		n = 5
	arr = []
	print("initial")
	for i in range(n):
		arr.append(uniform(-5, 5))
		print("{0: 7.3f}".format(arr[i]), end=" ")
	print()
	# ex1
	# count of a <= arr[i] <= b
	# also find iMax for ex2
	a = float(input("A: "))
	b = float(input("B: "))
	print()
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
	print("Count", count)
	print()
	# ex2
	# sum after max element
	sumArr = 0
	for i in range(iMax + 1, n):
		sumArr += arr[i]
	print("Sum", sumArr)
	print()
	# ex3
	sortedArray = sorted(arr, key=abs, reverse=True)
	print("sorted Array")
	for i in range(n):
		print("{0: 7.3f}".format(sortedArray[i]), end=" ")
except ValueError:
	print('Это не число. Выходим.')
