import { makeAutoObservable } from 'mobx'
import { IEvent, ITicket, ITicketClass, ITicketSeat } from '../../lib/types'
import TicketServices from './services'
import React from 'react'
import { EventStoreInstance } from '../events/store'

class TicketsStore {
	public tickets: ITicket[] = []

	private ticketClasses: ITicketClass[] = []
	private ticketSeats: ITicketSeat[] = []

	constructor() {
		makeAutoObservable(this)
	}

	async getTickets() {
		const [{ data }] = await Promise.all([
			TicketServices.getTickets(),
			EventStoreInstance.events.length === 0 ? EventStoreInstance.getEvents() : undefined,
			this.ticketClasses.length === 0 ? this.getTicketClasses() : undefined,
			this.ticketSeats.length === 0 ? this.getTicketSeats() : undefined
		])

		// todo move to adapter layer
		this.tickets = data.map((item) => {
			const event = EventStoreInstance.events.find((event) => event.id === item.event)
			const seat = this.ticketSeats.find((seat) => seat.id === item.seat)
			const ticketClass = this.ticketClasses.find(
				(ticketClass) => ticketClass.id === item.ticket_class
			)

			return {
				id: item.id,
				event: {
					id: (event as IEvent).id,
					name: (event as IEvent).name
				},
				seat: seat as ITicketSeat,
				ticketClass: ticketClass as ITicketClass
			}
		})
	}

	async getTicketClasses() {
		const { data } = await TicketServices.getTicketClasses()
		this.ticketClasses = data.map((item) => ({
			...item,
			ticketType: item.ticket_type,
			eventId: item.event
		}))
	}

	async getTicketSeats() {
		const { data } = await TicketServices.getTicketSeats()
		this.ticketSeats = data.map((item) => ({
			id: item.id,
			seat: item.seat_number,
			row: item.row_number
		}))
	}
}

export const TicketStoreInstance = new TicketsStore()
export const TicketStoreContext = React.createContext(TicketStoreInstance)

export const useTicketStore = () => {
	return React.useContext(TicketStoreContext)
}