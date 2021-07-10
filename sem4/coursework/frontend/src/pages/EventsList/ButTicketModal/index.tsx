import React, { useEffect, useMemo, useState } from 'react'
import styles from './styles.module.scss'
import { Modal, Select, Spin, notification } from 'antd'
import { useTicketStore } from '../../../store/tickets/store'
import { useHistory } from 'react-router'
import { RoutesEnum } from '../../../lib/routes'
const { Option } = Select

export function useModal<State>() {
	const [visible, setVisible] = useState(false)
	// store eventId here
	const [state, setState] = useState<State | undefined>(undefined)

	return {
		visible,
		state,
		close() {
			setVisible(false)
		},
		open(obj?: State) {
			setVisible(true)
			if (obj) setState(obj)
		}
	}
}

export interface IBuyTicketsModalState {
	eventId: number
}
interface IProps {
	state?: IBuyTicketsModalState
	visible: boolean
	onClose: () => void
}
export function BuyTicketModal({ state, onClose, visible }: IProps) {
	const ticketsStore = useTicketStore()
	const [loading, setLoading] = useState(false)
	const history = useHistory()

	useEffect(() => {
		setLoading(true)
		Promise.all([
			ticketsStore.ticketClasses.length === 0 ? ticketsStore.getTicketClasses() : undefined,
			ticketsStore.ticketSeats.length === 0 ? ticketsStore.getTicketSeats() : undefined
		]).finally(() => {
			setLoading(false)
		})
	}, [])

	const ticketsClasses = ticketsStore.ticketClasses.filter(
		(item) => item.eventId === state?.eventId
	)
	const [ticketClassId, setTicketClassId] = useState(ticketsClasses[0]?.id)

	const seats = ticketsStore.ticketSeats.filter((item) => item.ticketClassId === ticketClassId)
	const [seatId, setSeatId] = useState(seats[0]?.id)

	const onSubmit = () => {
		if (ticketClassId === undefined || seatId === undefined) return

		ticketsStore
			.createTicket({
				eventId: (state as IBuyTicketsModalState)?.eventId,
				seatId,
				ticketClassId
			})
			.then(() => {
				onClose()
				notification['success']({
					message: 'Билет успешно куплен!',
					description: 'Транзакция прошла успешно. Чек пришлем на емейл указанный при регистрации.'
				})
				history.push(RoutesEnum.TicketsList)
			})
	}

	return (
		<Modal
			title="Купить билет на событие"
			visible={visible}
			onOk={onSubmit}
			onCancel={onClose}
			cancelText="Отмена"
			okText="Купить">
			{loading ? (
				<div className={styles.loader}>
					<Spin />
				</div>
			) : (
				<>
					<div className={styles.field}>
						<label>Класс билета:</label>
						<Select className={styles.select} value={ticketClassId} onChange={setTicketClassId}>
							{ticketsClasses.map((item) => (
								<Option value={item.id} key={item.id}>
									{item.name} ({item.price} руб.)
								</Option>
							))}
						</Select>
					</div>

					<div className={styles.field}>
						<label>Выбрать место:</label>
						<Select className={styles.select} value={seatId} onChange={setSeatId}>
							{seats.map((item) => (
								<Option value={item.id} key={item.id}>
									Ряд {item.row}, Место {item.seat}
								</Option>
							))}
						</Select>
					</div>
				</>
			)}
		</Modal>
	)
}
