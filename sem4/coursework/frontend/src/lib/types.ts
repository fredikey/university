// Events
export interface ICity {
	id: number
	name: string
}
export interface IEventAddress {
	id: number
	name: string
	coordX: number
	coordY: number
	city: ICity
}
export interface IEventType {
	id: number
	name: string
}

export enum EventStatus {
	IN_SALE = 0,
	RUNNING = 1,
	CANCELLED = 2,
	SOLD_OUT = 3,
	FINISHED = 4
}
export interface IEvent {
	id: number
	name: string
	description: string
	saleStart: string
	timeEnd: string
	timeStart: string
	status: EventStatus
	eventType: IEventType
	address: IEventAddress
}

// Tickets

export interface ITicketSeat {
	id: number
	row: number
	seat: number
}
enum TicketType {
	SEAT = 0,
	ENTER = 1
}
export interface ITicketClass {
	id: number
	name: string
	price: number
	amount: number
	ticketType: TicketType
	eventId: number
}

export interface ITicket {
	id: number
	ticketClass: ITicketClass
	seat: ITicketSeat
	eventId: number
}
