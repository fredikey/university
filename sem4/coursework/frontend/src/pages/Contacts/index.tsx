import React from 'react'
import styles from './styles.module.scss'
import { Content } from '../../components'

function Contacts() {
	return (
		<Content className={styles.container}>
			<h4 className={styles.title}>Проект: Продажа билетов на события</h4>
			<p className={styles.info}>
				Выполнен в рамках дисциплины "Инженерное проектирование", 4 Cеместр 2021
			</p>
			<ul className={styles.list}>
				<li className={styles.listItem}>
					Кто делал? <b>Козодаев Виктор</b>
				</li>
				<li className={styles.listItem}>
					Какая группа? <b>191-321</b>
				</li>
				<li className={styles.listItem}>
					А где исходники проекта?{' '}
					<a href="https://github.com/fredikey/university/tree/tickets-courserwork/sem4/coursework">
						тут!
					</a>
				</li>
				<li className={styles.listItem}>
					Телега есть? <b>@fredikey</b>
				</li>
			</ul>
		</Content>
	)
}

export default Contacts
