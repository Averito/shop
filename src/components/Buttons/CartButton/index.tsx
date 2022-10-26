import { FC, MouseEventHandler } from 'react'
import Image from 'next/image'

import styles from './../Buttons.module.scss'
import cartButtonStyles from './CartButton.module.scss'
import cartIcon from '@assets/icons/cart.svg'

interface CartButtonProps {
	onClick?: MouseEventHandler<HTMLButtonElement>
	disabled?: boolean
	counter?: number
	onClickIncrement?: MouseEventHandler<HTMLButtonElement>
	onClickDecrement?: MouseEventHandler<HTMLButtonElement>
}

export const CartButton: FC<CartButtonProps> = ({
	onClick,
	disabled,
	onClickIncrement,
	onClickDecrement,
	counter
}) => {
	return counter ? (
		<div className={cartButtonStyles.counterWrapper}>
			<button
				className={cartButtonStyles.counterDecrement}
				onClick={onClickDecrement}
			/>
			<p className={cartButtonStyles.counterText}>{counter}</p>
			<button
				className={cartButtonStyles.counterIncrement}
				onClick={onClickIncrement}
			/>
		</div>
	) : (
		<button className={styles.cartButton} disabled={disabled} onClick={onClick}>
			<Image src={cartIcon} alt='Корзина' width={31} height={31} />
		</button>
	)
}
