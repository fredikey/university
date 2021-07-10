export interface IInitialTicket {
	id: number
	ticket_class: number
	seat: number
	event: number
}

export interface IInitialTicketClass {
	id: number
	name: string
	price: number
	amount: number
	ticket_type: number
	event: number
}

export interface IInitialTicketSeat {
	id: number
	row_number: number
	seat_number: number
	address: number
}
