class Note:
	name = ''
	surname = ''
	phone = ''
	birth_date = [0, 0, 0]

	def __init__(self, name='', surname='', phone='', birth_date=None):
		if birth_date is None:
			birth_date = [0, 0, 0]
		self.name = name
		self.surname = surname
		self.phone = phone
		self.birth_date = birth_date

	def set_name(self, name):
		self.name = name

	def set_surname(self, surname):
		self.surname = surname

	def set_phone(self, phone):
		self.phone = phone

	def set_birth_date(self, birth_date):
		self.birth_date = birth_date
