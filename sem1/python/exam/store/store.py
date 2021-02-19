import sys
from operator import attrgetter

sys.path.append('..')
from utils import utils
from store.model import User


class Store(object):
	user = User()

	def __init__(self):
		self.read_user_from_file()

	def read_user_from_file(self):
		data = utils.read_data_from_file('data')
		self.user = User(data[0], data[1], data[2])
		print(data)
