import matplotlib.pyplot as plt

COUNT_OF_SECTORS = 5


def pie_generator(figure, data, pie_labels, radius, coordinates, title):
	pie = figure.add_axes(coordinates, aspect=1)
	pie.pie(data, labels=pie_labels, radius=radius)
	pie.set_title(title, y=1.2)


fig = plt.figure()
fi = open('data.txt', mode="rt")
labels = fi.readline().split()
data1 = fi.readline().split()
data2 = fi.readline().split()

pie_generator(fig, data1, labels, 1, [0, .3, .5, .5], "Доля рынка, 1995 год")
pie_generator(fig, data2, labels, 1, [.5, .3, .5, .5], "Доля рынка, 1996 год")

plt.show()
