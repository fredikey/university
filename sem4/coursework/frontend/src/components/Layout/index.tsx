import React from 'react'
import { Layout, Menu } from 'antd'
import styles from './styles.module.scss'
import { Link, useLocation } from 'react-router-dom'
import { RoutesEnum } from '../../lib/routes'

const { Header, Content, Footer } = Layout

interface IHeaderLink {
	title: string
	path: string
}
const LINKS: IHeaderLink[] = [
	{
		title: 'Tickets List',
		path: RoutesEnum.TicketsList
	}
]
interface IProps {
	children: React.ReactNode
}
function AppLayout({ children }: IProps) {
	const location = useLocation()
	return (
		<Layout className={styles.container}>
			<Header>
				<Menu theme="dark" mode="horizontal" selectedKeys={[location.pathname]}>
					{LINKS.map((link) => (
						<Menu.Item key={link.path}>
							<Link to={link.path}>{link.title}</Link>
						</Menu.Item>
					))}
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
