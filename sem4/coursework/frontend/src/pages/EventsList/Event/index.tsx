import React, { useMemo } from 'react'
import styles from './styles.module.scss'
import { IEvent } from '../../../lib/types'
import { Card, List, Divider, Button } from 'antd'
import { renderEllipsis } from '../../../lib/utils'
import { CalendarOutlined, EnvironmentOutlined } from '@ant-design/icons'

interface IListItem {
	title: string
	icon: React.FC
	value: string | number
}
interface IProps {
	data: IEvent
	onClickBuy: (eventId: number) => void
}
function EventComponent({ data, onClickBuy }: IProps) {
	const date = useMemo(() => {
		const dateStartObj = new Date(data.timeStart)
		const dateEndObj = new Date(data.timeEnd)

		const dateStart = dateStartObj.toLocaleString('ru', {
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		})

		const timeEnd = dateEndObj.toLocaleString('ru', { hour: '2-digit', minute: '2-digit' })
		return `${dateStart}-${timeEnd}`
	}, [data.timeStart, data.timeEnd])

	const address = `${data.address.name}, г. ${data.address.city.name}`

	const LIST_ITEMS = useMemo(() => {
		return [
			{
				title: 'Дата',
				icon: CalendarOutlined,
				value: date
			},
			{
				title: 'Адрес',
				icon: EnvironmentOutlined,
				value: address
			}
		]
	}, [date, address])

	const handleBuyTicket = () => {
		onClickBuy(data.id)
	}
	return (
		<Card title={data.name} bordered bodyStyle={{ paddingTop: 0, paddingBottom: 10 }}>
			<List
				itemLayout="horizontal"
				dataSource={LIST_ITEMS}
				renderItem={(item: IListItem) => {
					const Icon = item.icon
					return (
						<List.Item key={item.title}>
							<List.Item.Meta
								className={styles.item}
								avatar={
									// @ts-expect-error
									<Icon className={styles.itemIcon} />
								}
								title={item.title}
								description={item.value}
							/>
						</List.Item>
					)
				}}
			/>
			<Divider orientation="left" plain>
				Описание
			</Divider>
			<div className={styles.bottom}>
				<p className={styles.description}>{renderEllipsis(data.description, 150)}</p>
				<Button type="primary" onClick={handleBuyTicket}>
					Купить
				</Button>
			</div>
		</Card>
	)
}

export { EventComponent }
