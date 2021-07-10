import React, { useEffect, useState } from 'react'
import { useTicketStore } from '../../store/tickets/store'
import styles from './styles.module.scss'
import { Content } from '../../components'
import { Button, List } from 'antd'
import { ProfileOutlined } from '@ant-design/icons'
import { TicketType } from '../../lib/types'
import { observer } from 'mobx-react-lite'

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

	return (
		<Content loading={loading}>
			<List
				itemLayout="horizontal"
				className={styles.container}
				dataSource={ticketsStore.tickets}
				renderItem={(item) => {
					const isTicketTypeSeat = item.ticketClass.ticketType === TicketType.SEAT

					return (
						<List.Item actions={[<Button>Вернуть</Button>]}>
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
