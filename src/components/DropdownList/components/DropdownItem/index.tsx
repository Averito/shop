import { FC, MouseEventHandler } from 'react'
import classNames from 'classnames'

import styles from './DropdownItem.module.scss'
import { ArrowUp } from '@assets/icons/ArrowUp'
import { DropdownItem as IDropdownItem } from '@components/DropdownList/types'

interface DropdownItemProps {
	onClickDropdownItem: (
		id: number | string
	) => MouseEventHandler<HTMLParagraphElement>
	idx: number
	dropdownItem: IDropdownItem
}

export const DropdownItem: FC<DropdownItemProps> = ({
	onClickDropdownItem,
	idx,
	dropdownItem
}) => {
	return (
		<p
			className={classNames(styles.dropdownItem, {
				[styles.dropdownItemOpened]: dropdownItem.opened
			})}
			onClick={onClickDropdownItem(dropdownItem.id)}
			tabIndex={idx}
		>
			{dropdownItem.label}
			<span className={styles.icon}>
				<ArrowUp />
			</span>
		</p>
	)
}
