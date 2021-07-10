import { createBrowserHistory } from 'history'
export enum RoutesEnum {
	Home = '/',
	EventsList = '/events',
	TicketsList = '/tickets',
	Contacts = '/contacts'
}

export const history = createBrowserHistory()
