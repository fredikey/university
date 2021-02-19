from tkinter import *
from pages.index import *


class App(Tk):
	def __init__(self, *args, **kwargs):
		Tk.__init__(self, *args, **kwargs)
		# Setup Menu
		MainMenu(self)
		# Setup Frame
		self.geometry('1280x720')
		container = Frame(self)
		container.pack(side="top", fill="both", expand=True)

		self.frames = {}

		for F in (StartPage, CreateNote, ExportNotes):
			frame = F(container, self)
			self.frames[F] = frame
			frame.grid(row=0, column=0, sticky="nsew")

		self.show_frame(StartPage)

	def show_frame(self, context):
		frame = self.frames[context]
		frame.tkraise()


	def update_table(self):
		frame = self.frames[StartPage]
		frame.reset()
		self.show_frame(StartPage)


class MainMenu:
	def __init__(self, master):
		menubar = Menu(master)
		appmenu = Menu(menubar, tearoff=0)
		appmenu.add_command(label="Exit", command=master.quit)
		menubar.add_cascade(label="App", menu=appmenu)
		master.config(menu=menubar)


app = App()
app.mainloop()
