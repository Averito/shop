import { FC, MouseEventHandler } from 'react'
import classNames from 'classnames'

import styles from './NestedDropdownItem.module.scss'
import {
	DropdownItem,
	NestedDropdownItem as INestedDropdownItem
} from '@components/DropdownList/types'

interface NestedDropdownItemProps {
	nestedDropdownItem: INestedDropdownItem
	currentNestedDropdownItem: INestedDropdownItem
	dropdownItem: DropdownItem
	onClickNestedDropdownItem: (
		nestedDropdownItem: INestedDropdownItem
	) => MouseEventHandler<HTMLParagraphElement>
}

export const NestedDropdownItem: FC<NestedDropdownItemProps> = ({
	nestedDropdownItem,
	onClickNestedDropdownItem,
	currentNestedDropdownItem,
	dropdownItem
}) => {
	return (
		<p
			className={classNames(styles.nestedDropdownItem, {
				[styles.nestedDropdownItemSelected]:
					nestedDropdownItem.id === currentNestedDropdownItem.id,
				[styles.nestedDropdownItemDisabled]: dropdownItem.disabled
			})}
			onClick={onClickNestedDropdownItem(nestedDropdownItem)}
		>
			{nestedDropdownItem.label}
		</p>
	)
}
