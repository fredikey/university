import { Api } from '../../lib/api'
import {
	IInitialSeatTicketClasses,
	IInitialTicket,
	IInitialTicketClass,
	IInitialTicketSeat
} from './adapter'

export default {
	getTickets() {
		return Api.get<IInitialTicket[]>('/ticket-list')
	},
	getTicketClasses() {
		return Api.get<IInitialTicketClass[]>('/ticketClass')
	},
	getTicketSeats() {
		return Api.get<IInitialTicketSeat[]>('/seat')
	},
	async getTicketSeatsClasses() {
		const [response1, response2] = await Promise.all([
			Api.get<IInitialSeatTicketClasses[]>('/seatTicketClass'),
			this.getTickets()
		])
		return {
			...response1,
			data: response1.data.map((item) => {
				const ticket = response2.data.find((ticket) => ticket.id === item.ticket)
				return {
					id: item.id,
					seat: item.seat,
					ticketClass: (ticket as IInitialTicket).ticket_class
				}
			})
		}
	},
	createTicket(data: Omit<IInitialTicket, 'id'>) {
		console.log('createTicket api', data)
		return Api.post<IInitialTicket>('/ticket-list/', data)
	}
	// deleteTicket(id: number) {
	// 	return Api.delete(`/ticket-detail/${id}`)
	// }
}
