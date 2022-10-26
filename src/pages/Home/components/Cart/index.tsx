import { FC, MouseEventHandler, useState } from 'react'
import { observer } from 'mobx-react-lite'
import classNames from 'classnames'
import Image from 'next/image'

import styles from './Cart.module.scss'
import closeIcon from '@assets/icons/close.svg'
import cartStore from '@stores/cart.store'
import { ArrowButton } from '@components/Buttons/ArrowButton'
import { CartButton } from '@components/Buttons/CartButton'
import { DefaultButton } from '@components/Buttons/DefaultButton'

export const Cart: FC = observer(() => {
	const [opened, setOpened] = useState<boolean>(false)
	const toggleOpened: MouseEventHandler<HTMLButtonElement> = () => {
		setOpened(!opened)
	}

	const onClickIncrement = (itemId: number | string, category: string) => {
		return () => {
			cartStore.increment(itemId, category)
		}
	}

	const onClickDecrement = (
		itemId: number | string,
		category: string,
		counter: number
	) => {
		return () => {
			if (counter - 1 <= 0) {
				return cartStore.remove(itemId, category)
			}
			cartStore.decrement(itemId, category)
		}
	}

	const onClickRemoveItem = (itemId: number | string, category: string) => {
		return () => {
			cartStore.remove(itemId, category)
		}
	}

	return (
		<div
			className={classNames(styles.wrapper, {
				[styles.opened]: opened,
				[styles.fill]: !!cartStore.cart.length
			})}
		>
			<div
				className={classNames(styles.button, {
					[styles.cartOpened]: opened
				})}
			>
				<ArrowButton onClick={toggleOpened} />
			</div>
			<h2 className={styles.title}>Корзина</h2>
			<div className={styles.cartInfo}>
				<div>
					<p className={classNames(styles.simpleText, styles.simpleText)}>
						Количество услуг в корзине
					</p>
					<p className={styles.boldText}>{cartStore.itemsCount}</p>
				</div>
				<div>
					<p className={classNames(styles.simpleText, styles.simpleText)}>
						Сумма заказа
					</p>
					<p className={styles.boldText}>{cartStore.itemsSum}₽</p>
				</div>
			</div>
			<div
				className={classNames(styles.infoAboutProducts, {
					[styles.opened]: opened && cartStore.cart.length
				})}
			>
				{cartStore.cart.map(category => (
					<div key={category.name}>
						<p className={styles.cartCategoryTitle}>
							{decodeURI(category.name)}
						</p>

						{category.items.map(cartItem => (
							<div className={styles.cartCategoryItem} key={cartItem.id}>
								<div className={styles.cartCategoryItemLine} />
								<div className={styles.removeButton}>
									<Image
										src={closeIcon}
										alt='remove'
										width={16}
										height={16}
										onClick={onClickRemoveItem(cartItem.id, category.name)}
									/>
								</div>
								<div className={styles.cartCategoryItemInfo}>
									<p className={styles.simpleText}>
										{decodeURI(cartItem.name)}
									</p>
									<div>
										<p className={styles.boldText}>{cartItem.price}₽</p>
										<CartButton
											counter={cartItem.count}
											onClickIncrement={onClickIncrement(
												cartItem.id,
												category.name
											)}
											onClickDecrement={onClickDecrement(
												cartItem.id,
												category.name,
												cartItem.count
											)}
										/>
									</div>
								</div>
								<div className={styles.cartCategoryItemLine} />
							</div>
						))}
					</div>
				))}
				<div className={styles.buttonBuy}>
					<DefaultButton>Оформить заказ</DefaultButton>
				</div>
			</div>
		</div>
	)
})
