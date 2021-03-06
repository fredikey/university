path = 'data/'
ext = '.txt'


def read_data_from_file(name):

	fi = open(path + name + ext, mode="rt")
	fi.readline()
	arr = []
	while True:
		line = fi.readline()
		if line:
			arr.append(line.split())
		else:
			break
	fi.close()
	return arr

def write_data_to_file(name, arr):
	fo = open(path + name + ext, mode="wt")
	fo.write("# name # surname # phone # birth_date #\n")
	for item in arr:
		date = '.'.join(item.birth_date)
		fo.write("{0:} {1:} {2:} {3:}\n".format(item.name, item.surname, item.phone, date))
	fo.close()
