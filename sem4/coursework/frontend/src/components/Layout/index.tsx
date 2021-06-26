import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import styles from './styles.module.scss'

const { Header, Content, Footer } = Layout

interface IProps {
	children: React.ReactNode
}

function AppLayout({ children }: IProps) {
	return (
		<Layout className={styles.container}>
			<Header>
				<Menu theme="dark" mode="horizontal" defaultActiveFirst>
					<Menu.Item>Link 1</Menu.Item>
				</Menu>
			</Header>
			<Content className={styles.contentOuter}>
				<div className={styles.content}>{children}</div>
			</Content>
			<Footer className={styles.footer}>Kozodaev Victor, 191-321</Footer>
		</Layout>
	)
}

export default AppLayout
