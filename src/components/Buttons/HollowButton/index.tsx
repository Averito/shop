import { FC, MouseEventHandler, PropsWithChildren } from 'react'

import styles from './HollowButton.module.scss'
import { FullArrowUp } from '@assets/icons/FullArrowUp'

interface HollowButtonProps {
	onClick?: MouseEventHandler<HTMLButtonElement>
	disabled?: boolean
}

export const HollowButton: FC<PropsWithChildren<HollowButtonProps>> = ({
	onClick,
	disabled,
	children
}) => {
	return (
		<button className={styles.button} disabled={disabled} onClick={onClick}>
			{children}
			<div className={styles.icon}>
				<FullArrowUp />
			</div>
		</button>
	)
}
