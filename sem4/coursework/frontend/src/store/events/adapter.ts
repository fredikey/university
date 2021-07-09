import { EventStatus, ICity, IEventAddress, IEventType } from '../../lib/types'

export interface IInitialEvent {
	id: number
	name: string
	description: string
	sale_start: string
	time_end: string
	time_start: string
	status: EventStatus
	event_type: number
	address: number
}
// export class EventAdapter {}

export interface IInitialEventAddress {
	id: number
	name: string
	coord_x: number
	coord_y: number
	city: number
}
// export class EventAddressAdapter {}
