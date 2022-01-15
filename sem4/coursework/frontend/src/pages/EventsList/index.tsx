import React, { useEffect, useState } from 'react'
import { useEventStore } from '../../store/events/store'
import styles from './styles.module.scss'
import { Content } from '../../components'
import { EventComponent } from './Event'
import { useModal, BuyTicketModal, IBuyTicketsModalState } from './ButTicketModal'
import { Input } from 'antd'

const { Search } = Input

function EventsList() {
	const eventsStore = useEventStore()
	const buyTicketModal = useModal<IBuyTicketsModalState>()
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

	const openBuyTicketModal = (eventId: number) => {
		buyTicketModal.open({ eventId })
	}

	const [searchText, setSearchText] = useState('')
	const filteredItems = eventsStore.events.filter((item) => {
		return item.name.toLowerCase().includes(searchText)
	})
	return (
		<Content loading={loading} className={styles.container}>
			<Search
				placeholder="Введите имя эвента.."
				allowClear
				enterButton="Поиск"
				size="large"
				onChange={(evt) => {
					setSearchText(evt.target.value)
				}}
				onSearch={setSearchText}
			/>
			<div className={styles.grid}>
				{filteredItems.map((item) => (
					<EventComponent key={item.id} data={item} onClickBuy={openBuyTicketModal} />
				))}
			</div>
			{buyTicketModal.visible && (
				<BuyTicketModal
					visible={buyTicketModal.visible}
					onClose={buyTicketModal.close}
					state={buyTicketModal.state}
				/>
			)}
		</Content>
	)
}

export default EventsList
