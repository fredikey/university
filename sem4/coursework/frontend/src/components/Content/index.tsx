import React from 'react'
import styles from './styles.module.scss'
import { cx } from '../../lib/utils'
import { Layout, Spin } from 'antd'
const { Content: ContentAntd } = Layout

interface IProps {
	children: React.ReactNode
	loading?: boolean
	className?: string
}
function Content({ children, loading, className }: IProps) {
	return (
		<ContentAntd className={styles.contentOuter}>
			{loading ? (
				<div className={cx(styles.content, styles.loaderContainer)}>
					<Spin size="large" />
				</div>
			) : (
				<div className={cx(styles.content, className)}>{children}</div>
			)}
		</ContentAntd>
	)
}

export default Content
