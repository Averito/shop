import { NextPage } from 'next'
import { useState } from 'react'

import styles from './Home.module.scss'
import { Input } from '@components/Input'
import {
	DropdownItem,
	NestedDropdownItem
} from '@components/DropdownList/types'
import { Price } from '@api/agbApi/types'
import { DropdownList } from '@components/DropdownList'
import { ProductComponent } from '@pages/Home/components/ProductComponent'
import { Cart } from '@pages/Home/components/Cart'

interface HomeProps {
	dropdownList: DropdownItem[]
	prices: Price[]
}

export const Home: NextPage<HomeProps> = ({ dropdownList, prices }) => {
	const [search, setSearch] = useState<string>('')
	const [dropdownItems, setDropdownItems] =
		useState<DropdownItem[]>(dropdownList)
	const [currentNestedDropdownItem, setCurrentNestedDropdownItem] =
		useState<NestedDropdownItem>(dropdownList[0].items[0])

	const onClickDropdownItem = (id: number | string) => {
		return () => {
			setDropdownItems(prevState => {
				return prevState.map(dropdownItem => ({
					...dropdownItem,
					opened:
						dropdownItem.id === id ? !dropdownItem.opened : dropdownItem.opened
				}))
			})
		}
	}
	const onClickNestedDropdownItem = (
		nestedDropdownItem: NestedDropdownItem
	) => {
		return () => {
			setCurrentNestedDropdownItem(nestedDropdownItem)
		}
	}

	return (
		<>
			<div className={styles.top}>
				<h2 className={styles.topTitle}>Услуги</h2>
				<Input value={search} onChange={setSearch} placeholder='Поиск' />
			</div>
			<div className={styles.content}>
				<div>
					<DropdownList
						list={dropdownItems}
						currentNestedDropdownItem={currentNestedDropdownItem}
						onClickDropdownItem={onClickDropdownItem}
						onClickNestedDropdownItem={onClickNestedDropdownItem}
					/>
				</div>
				<div>
					<p>
						Из-за ежедневного использования повседневная одежда быстро
						изнашивается и нуждается в профессиональном уходе. То, что чаще
						носится, должно и чаще чиститься! Подбирать для повседневной одежды
						правильные программы обработки – это задача профессионалов.
					</p>
					{prices
						.filter(price => price.folder_id === currentNestedDropdownItem.id)
						.map(price => (
							<ProductComponent key={price.id} price={price} />
						))}
				</div>
			</div>
			<Cart />
		</>
	)
}
