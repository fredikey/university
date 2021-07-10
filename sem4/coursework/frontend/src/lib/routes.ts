import { createBrowserHistory } from 'history'
export enum RoutesEnum {
	EventsList = '/events',
	TicketsList = '/tickets'
}

export const history = createBrowserHistory()
