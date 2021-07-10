import { Api } from '../../lib/api'
import { IInitialTicket, IInitialTicketClass, IInitialTicketSeat } from './adapter'

export default {
	getTickets() {
		return Api.get<IInitialTicket[]>('/ticket-list')
	},
	getTicketClasses() {
		return Api.get<IInitialTicketClass[]>('/ticketClass')
	},
	getTicketSeats() {
		return Api.get<IInitialTicketSeat[]>('/seat')
	}
}
