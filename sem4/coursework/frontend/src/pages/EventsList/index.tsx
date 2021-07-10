import React, { useEffect, useState } from 'react'
import { useEventStore } from '../../store/events/store'
import styles from './styles.module.scss'
import { Content } from '../../components'
import { EventComponent } from './Event'

function EventsList() {
	const eventsStore = useEventStore()

	// get events list
	const isEventsLoaded = eventsStore.events.length !== 0
	const [loading, setLoading] = useState(!isEventsLoaded)
	useEffect(() => {
		if (!isEventsLoaded) {
			eventsStore.getEvents().finally(() => {
				setLoading(false)
			})
		}
	}, [])

	return (
		<Content loading={loading} className={styles.container}>
			{eventsStore.events.map((item) => (
				<EventComponent key={item.id} data={item} />
			))}
		</Content>
	)
}

export default EventsList
