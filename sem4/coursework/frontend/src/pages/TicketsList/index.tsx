import React, { useEffect, useState } from 'react'
import { useTicketStore } from '../../store/tickets/store'
import styles from './styles.module.scss'
import { Content } from '../../components'
import { Input, Select, List } from 'antd'
import { ProfileOutlined } from '@ant-design/icons'
import { TicketType } from '../../lib/types'
import { observer } from 'mobx-react-lite'
const { Search } = Input
const { Option } = Select

function TicketsList() {
	const ticketsStore = useTicketStore()

	// get tickets list
	const isTicketsLoaded = ticketsStore.tickets.length !== 0
	const [loading, setLoading] = useState(!isTicketsLoaded)
	useEffect(() => {
		if (!isTicketsLoaded) {
			ticketsStore.getTickets().finally(() => {
				setLoading(false)
			})
		}
	}, [])

	const [searchText, setSearchText] = useState('')
	const [ticketClassFilter, setTicketClassFilter] = useState(-1)
	const filteredItems = ticketsStore.tickets.filter((item) => {
		const isSearch = item.event.name.toLowerCase().includes(searchText)
		const isTicketClass =
			ticketClassFilter === -1 ? true : item.ticketClass.id === ticketClassFilter

		return isSearch && isTicketClass
	})

	return (
		<Content loading={loading} className={styles.container}>
			<div className={styles.filter}>
				<Search
					placeholder="Введите имя билета.."
					allowClear
					enterButton="Поиск"
					size="large"
					onChange={(evt) => {
						setSearchText(evt.target.value)
					}}
					onSearch={setSearchText}
				/>
				<div className={styles.field}>
					Класс билета:
					<Select
						className={styles.select}
						value={ticketClassFilter}
						onChange={setTicketClassFilter}>
						<Option value={-1}>Все</Option>
						{ticketsStore.ticketClasses.map((item) => (
							<Option value={item.id} key={item.id}>
								{item.name}
							</Option>
						))}
					</Select>
				</div>
			</div>
			<List
				itemLayout="horizontal"
				className={styles.list}
				dataSource={filteredItems}
				renderItem={(item) => {
					const isTicketTypeSeat = item.ticketClass.ticketType === TicketType.SEAT

					return (
						<List.Item>
							<List.Item.Meta
								avatar={<ProfileOutlined />}
								title={item.event.name}
								description={
									<div className={styles.itemInfoList}>
										<span className={styles.itemInfo}>
											Класс билета: <b>{item.ticketClass.name}</b>
										</span>
										{isTicketTypeSeat && (
											<span className={styles.itemInfo}>
												Место:{' '}
												<b>
													Ряд {item.seat.row}, Место {item.seat.seat}
												</b>
											</span>
										)}
										<span className={styles.itemInfo}>
											Цена билета: <b>{item.ticketClass.price}</b>
										</span>
									</div>
								}
							/>
						</List.Item>
					)
				}}
			/>
		</Content>
	)
}

export default observer(TicketsList)
