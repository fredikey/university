from tkinter import *
import sys, os
from tkinter import messagebox

sys.path.append('..')
from store.store import Store

store = Store()


class First(Frame):
	def __init__(self, parent, controller):
		Frame.__init__(self, parent)
		Label(self, text="Имя: " + store.user.name).grid(column=0, row=0)
		Label(self, text="Фамилия: " + store.user.surname).grid(column=1, row=0)
		Label(self, text="Номер зачетки: " + store.user.numbers).grid(column=2, row=0)

		Button(self, text="Второе окно", command=lambda: controller.show_frame(Second)).grid(column=0, row=2)
		Button(self, text="Третье окно", command=lambda: controller.show_frame(Third)).grid(column=1, row=2)
		Button(self, text="Четвертое окно", command=lambda: controller.show_frame(Fourth)).grid(column=2, row=2)
		Label(self, text="Первое окно:", font="Verdana 16 bold").grid(column=0, row=3)
		# active button
		text = self.surname + str(self.clickCounts)
		Button(self, text=text, command=lambda: self.handle()).grid(column=0, row=4)

	surname = ''
	clickCounts = 0

	def handle(self):
		self.clickCounts += 1
		self.surname = self.render_surname(store.user.surname)
		text = self.surname + ' ' + str(self.clickCounts)
		Button(self, text=text, command=lambda: self.handle()).grid(column=0, row=4)

	def render_surname(self, string):
		last_index = len(string) - 1
		res = ''
		if self.clickCounts >= 4:
			return 'еаоо'
		elif self.clickCounts >= 3:
			return 'еао'
		elif self.clickCounts >= 2:
			return 'eа'
		elif self.clickCounts >= 1:
			return 'e'
		else:
			return ''


class Second(Frame):
	def __init__(self, parent, controller):
		Frame.__init__(self, parent)
		Label(self, text="Имя: " + store.user.name).grid(column=0, row=0)
		Label(self, text="Фамилия: " + store.user.surname).grid(column=1, row=0)
		Label(self, text="Номер зачетки: " + store.user.numbers).grid(column=2, row=0)

		Button(self, text="Первое окно", command=lambda: controller.show_frame(First)).grid(column=0, row=2)
		Button(self, text="Третье окно", command=lambda: controller.show_frame(Third)).grid(column=1, row=2)
		Button(self, text="Четвертое окно", command=lambda: controller.show_frame(Fourth)).grid(column=2, row=2)
		Label(self, text="Второе окно:", font="Verdana 16 bold").grid(column=0, row=3)
		# go
		password = StringVar()
		valid_password = 'hello'
		text1 = 'Доктор, а у меня нос заложен!'
		text2 = 'Подумаешь! А у меня все драгоценности и квартира…'
		Label(self, text="Текст:").grid(column=1, row=4)
		Label(self, text=text1, justify=CENTER).grid(column=2, row=4)
		Button(self, text="Показать продолжение", command=lambda: handle_button()).grid(column=1, row=5)
		Label(self, text="Пароль (hello):").grid(column=1, row=6)
		Entry(self, textvariable=password, justify=CENTER).grid(column=2, row=6)
		continue_label = Label(self, text="Продолжение:")
		continue_value = Label(self, text=text2, justify=CENTER)
		error = Label(self, text="Пароль неправильный!")

		def handle_button():
			if password.get() == valid_password:
				error.grid_remove()
				continue_label.grid(column=1, row=7)
				continue_value.grid(column=2, row=7)
			else:
				continue_label.grid_remove()
				continue_value.grid_remove()
				error.grid(column=1, row=7)


class Third(Frame):
	def __init__(self, parent, controller):
		Frame.__init__(self, parent)
		Label(self, text="Имя: " + store.user.name).grid(column=0, row=0)
		Label(self, text="Фамилия: " + store.user.surname).grid(column=1, row=0)
		Label(self, text="Номер зачетки: " + store.user.numbers).grid(column=2, row=0)

		Button(self, text="Первое окно", command=lambda: controller.show_frame(First)).grid(column=0, row=2)
		Button(self, text="Второе окно", command=lambda: controller.show_frame(Second)).grid(column=1, row=2)
		Button(self, text="Четвертое окно", command=lambda: controller.show_frame(Fourth)).grid(column=2, row=2)
		Label(self, text="Третье окно:", font="Verdana 16 bold").grid(column=0, row=3)

		def split(word):
			return [char for char in word]

		def renderLetters():
			word = split(store.user.name.lower() + store.user.surname.lower())
			itog = list(set(word))
			itog.sort()
			return itog

		letters = renderLetters()
		values = [0] * len(letters)

		def cb(index):
			if values[index] == 0:
				values[index] = 1
			else:
				values[index] = 0
			renderItogLabel()
		for i in range(len(letters)):
			btn = Checkbutton(self, text=letters[i], command=lambda index=i: cb(index))
			btn.grid(column=0, row=4 + i)
		def renderItogLabel():
			Label(self, text="Итого: " + renderItog()).grid(column=0, row=len(letters) + 4)
		def renderItog():
			res = ''
			for i2 in range(len(values)):
				if values[i2] == 1:
					res += letters[i2]
			return res

class Fourth(Frame):
	def __init__(self, parent, controller):
		Frame.__init__(self, parent)
		Label(self, text="Имя: " + store.user.name).grid(column=0, row=0)
		Label(self, text="Фамилия: " + store.user.surname).grid(column=1, row=0)
		Label(self, text="Номер зачетки: " + store.user.numbers).grid(column=2, row=0)

		Button(self, text="Первое окно", command=lambda: controller.show_frame(First)).grid(column=0, row=2)
		Button(self, text="Второе окно", command=lambda: controller.show_frame(Second)).grid(column=1, row=2)
		Button(self, text="Третье окно", command=lambda: controller.show_frame(Third)).grid(column=2, row=2)
		Label(self, text="Четвертое окно:", font="Verdana 16 bold").grid(column=0, row=3)
		# go
		value = StringVar()
		modes = ['Волк с Уолл стрит', 'Время']
		Radiobutton(self, text=modes[0], variable=value, value=modes[0], command=lambda: cb()).grid(column=0, row=4)
		Radiobutton(self, text=modes[1], variable=value, value=modes[1], command=lambda: cb()).grid(column=1, row=4)
		def cb():
			label = Label(self, text="Итог: " + value.get())
			label.grid_remove()
			label.grid(column=0, row=5)
