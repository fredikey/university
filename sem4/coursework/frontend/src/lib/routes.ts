import { createBrowserHistory } from 'history'
export enum RoutesEnum {
	Home = '/',
	EventsList = '/events',
	TicketsList = '/tickets'
}

export const history = createBrowserHistory()
