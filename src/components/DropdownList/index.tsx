import { FC, MouseEventHandler } from 'react'
import classNames from 'classnames'

import styles from './DropdownList.module.scss'
import {
	DropdownItem as IDropdownItem,
	NestedDropdownItem as INestedDropdownItem
} from '@components/DropdownList/types'
import { DropdownItem } from './components/DropdownItem'
import { NestedDropdownItem } from '@components/DropdownList/components/NestedDropdownItem'

interface DropdownListProps {
	list: IDropdownItem[]
	currentNestedDropdownItem: INestedDropdownItem
	onClickDropdownItem: (
		id: number | string
	) => MouseEventHandler<HTMLParagraphElement>
	onClickNestedDropdownItem: (
		nestedDropdownItem: INestedDropdownItem
	) => MouseEventHandler<HTMLParagraphElement>
}

export const DropdownList: FC<DropdownListProps> = ({
	list,
	currentNestedDropdownItem,
	onClickDropdownItem,
	onClickNestedDropdownItem
}) => {
	return (
		<div>
			{list.map((dropdownItem, idx) => (
				<div className={styles.dropdownItemWrapper} key={dropdownItem.id}>
					<DropdownItem
						dropdownItem={dropdownItem}
						onClickDropdownItem={onClickDropdownItem}
						idx={idx}
					/>
					<div
						className={classNames(styles.nestedDropdownItems, {
							[styles.opened]: dropdownItem.opened && dropdownItem.items.length
						})}
					>
						{dropdownItem.items.map(nestedDropdownItem => (
							<NestedDropdownItem
								key={nestedDropdownItem.id}
								dropdownItem={dropdownItem}
								nestedDropdownItem={nestedDropdownItem}
								currentNestedDropdownItem={currentNestedDropdownItem}
								onClickNestedDropdownItem={onClickNestedDropdownItem}
							/>
						))}
					</div>
				</div>
			))}
		</div>
	)
}
