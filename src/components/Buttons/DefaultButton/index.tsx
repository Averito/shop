import { FC, MouseEventHandler, PropsWithChildren } from 'react'
import styles from './../Buttons.module.scss'

interface DefaultButtonProps {
	onClick?: MouseEventHandler<HTMLButtonElement>
	disabled?: boolean
}

export const DefaultButton: FC<PropsWithChildren<DefaultButtonProps>> = ({
	onClick,
	disabled,
	children
}) => {
	return (
		<button
			className={styles.defaultButton}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</button>
	)
}
