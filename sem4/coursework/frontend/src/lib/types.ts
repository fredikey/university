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
