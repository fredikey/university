import sys
from operator import attrgetter

sys.path.append('..')
from utils import utils
from store.model import Note


class Store(object):
	notes = []

	def __init__(self):
		self.read_notes_from_file()

	def read_notes_from_file(self, filename='1'):
		data = utils.read_data_from_file(filename)
		result = []

		for i in range(0, len(data)):
			item = data[i]
			result.append(Note(item[0], item[1], item[2], item[3].split('.')))
		self.notes = result


	def write_data_to_file(self, name):
		utils.write_data_to_file(name, self.notes)

	def add_note(self, name, surname, phone, birth_date):
		def format_date(value):
			if 0 < int(value) <= 9:
				return '0' + value
			else:
				return value
		name = name.strip().capitalize()
		surname = surname.strip().capitalize()
		birth_date[0] = format_date(birth_date[0])
		birth_date[1] = format_date(birth_date[1])
		res = Note(name, surname, phone, birth_date)
		self.notes.append(res)

	def sort_notes(self, query=''):
		if query == '':
			return sorted(self.notes, key=attrgetter('name'))
		else:
			res = []
			for item in self.notes:
				if int(item.birth_date[1]) == int(query):
					res.append(item)
			return res
