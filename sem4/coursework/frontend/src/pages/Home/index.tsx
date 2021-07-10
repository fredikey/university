import React from 'react'
import styles from './styles.module.scss'
import { Content } from '../../components'

function Home() {
	return (
		<Content className={styles.container}>
			<h3 className={styles.title}>Продажа билетов на самые лучшие события!</h3>
			<p className={styles.info}>
				Здесь ты можешь купить билеты / проходки
				<br /> на самые уникальные события города
			</p>
		</Content>
	)
}

export default Home
