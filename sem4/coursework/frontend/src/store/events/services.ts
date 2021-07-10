import { Api } from '../../lib/api'
import { ICity, IEvent, IEventType } from '../../lib/types'
import { IInitialEventAddress, IInitialEvent } from './adapter'

export default {
	getCities() {
		return Api.get<ICity[]>('/city')
	},
	getAddress() {
		return Api.get<IInitialEventAddress[]>('/address')
	},
	getEventTypes() {
		return Api.get<IEventType[]>('/eventType')
	},
	getEvents() {
		return Api.get<IInitialEvent[]>('/event-list')
	}
}
