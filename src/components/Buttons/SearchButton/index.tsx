import { FC, MouseEventHandler, PropsWithChildren } from 'react'

import styles from './SearchButton.module.scss'
import { Search } from '@assets/icons/Search'

interface SearchButtonProps {
	onClick?: MouseEventHandler<HTMLButtonElement>
	disabled?: boolean
}

export const SearchButton: FC<PropsWithChildren<SearchButtonProps>> = ({
	onClick,
	disabled,
	children
}) => {
	return (
		<button className={styles.button} disabled={disabled} onClick={onClick}>
			<div className={styles.icon}>
				<Search />
			</div>
			{children}
		</button>
	)
}
