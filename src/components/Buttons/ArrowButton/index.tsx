import { FC, MouseEventHandler } from 'react'

import styles from './ArrowButton.module.scss'
import { FullArrowUp } from '@assets/icons/FullArrowUp'

interface ArrowButtonProps {
	onClick?: MouseEventHandler<HTMLButtonElement>
	disabled?: boolean
}

export const ArrowButton: FC<ArrowButtonProps> = ({ onClick, disabled }) => {
	const color = disabled ? '#7E7E7E' : '#0084CA'

	return (
		<button className={styles.button} disabled={disabled} onClick={onClick}>
			<FullArrowUp color={color} />
		</button>
	)
}
