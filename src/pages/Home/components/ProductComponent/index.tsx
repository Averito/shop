import { observer, Observer } from 'mobx-react-lite'
import { FC, MouseEventHandler } from 'react'

import styles from './ProductComponent.module.scss'
import { Price } from '@api/agbApi/types'
import { CartButton } from '@components/Buttons/CartButton'
import { HollowButton } from '@components/Buttons/HollowButton'
import cartStore from '@stores/cart.store'

interface ProductComponentProps {
	price: Price
}

export const ProductComponent: FC<ProductComponentProps> = observer(
	({ price }) => {
		const counter = cartStore.cart
			.find(category => category.name === price.group_c)
			?.items?.find(cartItem => cartItem.id === price.id)?.count

		const onClickAdd: MouseEventHandler<HTMLButtonElement> = () => {
			cartStore.add(
				{
					id: price.id,
					name: price.name,
					count: counter ? counter + 1 : 1,
					price: price.price
				},
				price.group_c
			)
		}

		const onClickIncrement: MouseEventHandler<HTMLButtonElement> = () => {
			cartStore.increment(price.id, price.group_c)
		}

		const onClickDecrement: MouseEventHandler<HTMLButtonElement> = () => {
			if ((counter ?? 0) - 1 <= 0) {
				return cartStore.remove(price.id, price.group_c)
			}
			cartStore.decrement(price.id, price.group_c)
		}

		return (
			<div className={styles.wrapper}>
				<p className={styles.title}>{decodeURI(price.name)}</p>
				<div className={styles.price}>
					<p>{price.price}₽</p>
					<Observer>
						{() => (
							<CartButton
								counter={counter}
								onClick={onClickAdd}
								onClickIncrement={onClickIncrement}
								onClickDecrement={onClickDecrement}
							/>
						)}
					</Observer>
				</div>
				<HollowButton disabled>Подробнее</HollowButton>
			</div>
		)
	}
)
