import { makeAutoObservable } from 'mobx'
import { IEvent, ITicket, ITicketClass, ITicketSeat } from '../../lib/types'
import TicketServices from './services'
import React from 'react'
import { EventStoreInstance } from '../events/store'

class TicketsStore {
	public tickets: ITicket[] = []

	public ticketClasses: ITicketClass[] = []
	public ticketSeats: ITicketSeat[] = []

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
		const [{ data: seatsData }, { data: seatsClassesData }] = await Promise.all([
			TicketServices.getTicketSeats(),
			TicketServices.getTicketSeatsClasses()
		])
		console.log(seatsClassesData)
		console.log('seatsData', seatsData)
		this.ticketSeats = seatsData.map((item) => {
			const seatClasses = seatsClassesData.find((ticketsSeat) => ticketsSeat.seat === item.id)
			return {
				id: item.id,
				seat: item.seat_number,
				row: item.row_number,
				// @ts-expect-error
				ticketClassId: seatClasses.ticketClass
			}
		})
	}

	async createTicket({
		eventId,
		seatId,
		ticketClassId
	}: {
		eventId: number
		seatId: number
		ticketClassId: number
	}) {
		const { data } = await TicketServices.createTicket({
			event: eventId,
			seat: seatId,
			ticket_class: ticketClassId
		})
		// todo refactor that duplicated code
		const event = EventStoreInstance.events.find((event) => event.id === eventId)
		const seat = this.ticketSeats.find((seat) => seat.id === seatId)
		const ticketClass = this.ticketClasses.find((ticketClass) => ticketClass.id === ticketClassId)

		this.tickets.push({
			id: data.id,
			event: {
				id: (event as IEvent).id,
				name: (event as IEvent).name
			},
			seat: seat as ITicketSeat,
			ticketClass: ticketClass as ITicketClass
		})
	}

	// async deleteTicket(id: number) {
	// 	await TicketServices.deleteTicket(id)
	// 	const idx = this.tickets.findIndex((item) => item.id === id)
	// 	if (idx !== -1) {
	// 		this.tickets.splice(idx, 1)
	// 	}
	// }
}

export const TicketStoreInstance = new TicketsStore()
export const TicketStoreContext = React.createContext(TicketStoreInstance)

export const useTicketStore = () => {
	return React.useContext(TicketStoreContext)
}
