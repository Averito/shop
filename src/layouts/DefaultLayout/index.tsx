import { FC, PropsWithChildren } from 'react'

import styles from './DefaultLayout.module.scss'
import { Header } from './components/Header'

export const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Header />
			<main className={styles.content}>
				<div>{children}</div>
			</main>
		</>
	)
}
