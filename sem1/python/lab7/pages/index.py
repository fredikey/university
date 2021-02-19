from tkinter import *
import sys, os
from tkinter import messagebox

sys.path.append('..')
from store.store import Store

store = Store()


class StartPage(Frame):
	def __init__(self, parent, controller):
		Frame.__init__(self, parent)
		Label(self, text="List of Notes:", font="Verdana 16 bold").grid(column=0, row=0)
		Button(self, text="Add Note", command=lambda: controller.show_frame(CreateNote)).grid(column=0, row=1)
		Button(self, text="Export Notes", command=lambda: controller.show_frame(ExportNotes)).grid(column=0, row=2)
		self.query = StringVar()
		self.query.set('')

		Label(self, text="Search Notes by number of Month").grid(column=2, row=0)
		Entry(self, textvariable=self.query, justify=CENTER, width=5).grid(column=3, row=0)
		Button(self, text="Search", command=lambda: search_by_number_of_month()).grid(column=4, row=0)
		Button(self, text="Reset", command=lambda: self.reset()).grid(column=5, row=0)

		def search_by_number_of_month():
			try:
				self.render_table()
			except:
				messagebox.showerror('Error.', 'Number of Month should be number')

		table_header_name = Label(self, text="Name")
		table_header_name.grid(column=1, row=2)
		table_header_surname = Label(self, text="Surname")
		table_header_surname.grid(column=2, row=2)
		table_header_phone = Label(self, text="Phone")
		table_header_phone.grid(column=3, row=2)
		table_header_birth_date = Label(self, text="Birth date")
		table_header_birth_date.grid(column=4, row=2)
		self.render_table()

	ref_list = []
	isRendered = False

	def reset(self):
		self.query.set('')
		self.render_table()

	def render_table(self):
		sorted_notes = store.sort_notes(self.query.get())
		if self.isRendered:
			self.clear_table()
		else:
			self.isRendered = True

		if len(sorted_notes) == 0:
			messagebox.showwarning('Not found', 'Notes with this number of month was not founded')
			self.reset()

		else:
			for i in range(0, len(sorted_notes)):
				item = sorted_notes[i]
				table_name = Label(self, text=item.name)
				table_name.grid(column=1, row=3 + i)
				table_surname = Label(self, text=item.surname)
				table_surname.grid(column=2, row=3 + i)
				table_phone = Label(self, text=item.phone)
				table_phone.grid(column=3, row=3 + i)
				table_birth_date = Label(self, text='.'.join(item.birth_date))
				table_birth_date.grid(column=4, row=3 + i)
				self.ref_list.append(table_name)
				self.ref_list.append(table_surname)
				self.ref_list.append(table_phone)
				self.ref_list.append(table_birth_date)

	def clear_table(self):
		for item in self.ref_list:
			item.grid_remove()


class CreateNote(Frame):
	def __init__(self, parent, controller):
		Frame.__init__(self, parent)
		Label(self, text="Create Note", font="Verdana 16 bold").grid(column=0, row=0)
		start_page_button = Button(self, text="Start Page", command=lambda: controller.show_frame(StartPage))
		start_page_button.grid(column=0, row=1)
		name = StringVar()
		phone = StringVar()
		surname = StringVar()
		birth_day = StringVar()
		birth_month = StringVar()
		birth_year = StringVar()

		Label(self, text="Name").grid(column=1, row=2)
		Entry(self, textvariable=name, justify=CENTER).grid(column=2, row=2)
		Label(self, text="Surname").grid(column=1, row=3)
		Entry(self, textvariable=surname, justify=CENTER).grid(column=2, row=3)
		Label(self, text="Phone").grid(column=1, row=4)
		Entry(self, textvariable=phone, justify=CENTER).grid(column=2, row=4)
		Label(self, text="Birth date").grid(column=3, row=2)
		Entry(self, width=5, textvariable=birth_day, justify=CENTER).grid(column=4, row=2)
		Entry(self, width=5, textvariable=birth_month, justify=CENTER).grid(column=5, row=2)
		Entry(self, width=5, textvariable=birth_year, justify=CENTER).grid(column=6, row=2)

		def clear():
			name.set('')
			surname.set('')
			phone.set('')
			birth_day.set('')
			birth_month.set('')
			birth_year.set('')

		def add_note():
			try:
				if name.get() == '' or phone.get() == '' or surname.get() == '' or birth_day.get() == '' or birth_year.get() == '' or birth_month.get() == '':
					messagebox.showerror("Error", "All fields are required")
				elif not (0 < int(birth_month.get()) <= 12) or not (0 < int(birth_day.get()) <= 31) or not (
					1900 < int(birth_year.get()) <= 2019):
					messagebox.showerror("Error", "Birth day is incorrect")
				else:
					store.add_note(name.get(), surname.get(), phone.get(), [birth_day.get(), birth_month.get(), birth_year.get()])
					controller.update_table()
					clear()
					messagebox.showinfo("Success", "Note was successfully added")
			except:
				messagebox.showerror("Error", "Form is incorrect")

		Button(self, text="Create Note", command=lambda: add_note()).grid(column=2, row=7)


class ExportNotes(Frame):
	def __init__(self, parent, controller):
		Frame.__init__(self, parent)
		Label(self, text="Export Notes", font="Verdana 16 bold").grid(column=0, row=0)
		start_page_button = Button(self, text="Start Page", command=lambda: controller.show_frame(StartPage))
		start_page_button.grid(column=0, row=1)
		name = StringVar()

		def export():
			if name.get() == '':
				messagebox.showerror('Error', 'Name of file should be not empty')
			else:
				try:
					store.write_data_to_file(name.get())
					messagebox.showinfo('Success', 'You may find your file at {0:}'.format(os.getcwd() + '/' + name.get() + '.txt'))
					name.set('')
					controller.show_frame(StartPage)
				except:
					messagebox.showerror('Error', 'Export was failed')



		Label(self, text="Name of file").grid(column=2, row=0, padx=10)
		Entry(self, textvariable=name, justify=CENTER, width=15).grid(column=3, row=0)
		Button(self, text="Export", command=lambda: export()).grid(column=4, row=0)
