import { makeAutoObservable } from 'mobx'
import { IEvent, IEventAddress, IEventType, ICity } from '../../lib/types'
import EventServices from './services'
import React from 'react'

class EventsStore {
	public events: IEvent[] = []

	private address: IEventAddress[] = []
	private cities: ICity[] = []
	private eventTypes: IEventType[] = []

	constructor() {
		makeAutoObservable(this)
	}

	async getEvents() {
		const [{ data }] = await Promise.all([
			EventServices.getEvents(),
			this.eventTypes.length === 0 ? this.getEventTypes() : undefined,
			this.address.length === 0 ? this.getAddress() : undefined
		])

		// todo move to adapter layer
		this.events = data.map((item) => {
			const address = this.address.find((address) => address.id === item.address)
			const eventType = this.eventTypes.find((type) => type.id === item.event_type)

			return {
				...item,
				timeEnd: item.time_end,
				timeStart: item.time_start,
				saleStart: item.sale_start,
				address: address as IEventAddress,
				eventType: eventType as IEventType
			}
		})
	}

	async getEventTypes() {
		const { data } = await EventServices.getEventTypes()
		this.eventTypes = data
	}

	async getCities() {
		const { data } = await EventServices.getCities()
		this.cities = data
	}
	async getAddress() {
		const [{ data }] = await Promise.all([
			EventServices.getAddress(),
			this.cities.length === 0 ? this.getCities() : undefined
		])

		// todo move to adapter layer
		this.address = data.map((item) => {
			const city = this.cities.find((city) => city.id === item.city)

			return {
				id: item.id,
				name: item.name,
				coordX: item.coord_x,
				coordY: item.coord_y,
				city: city as ICity
			}
		})
	}
}

export const EventStoreContext = React.createContext(EventsStore)

export const useEventStore = () => {
	return React.useContext(EventStoreContext)
}
