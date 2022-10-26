import { ChangeEventHandler, FC, MouseEventHandler } from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import styles from './Input.module.scss'
import closeIcon from '@assets/icons/close.svg'
import { Search } from '@assets/icons/Search'

interface InputProps {
	value: string
	onChange: (value: string) => unknown
	placeholder?: string
	width?: string
	error?: string
}

export const Input: FC<InputProps> = ({
	value,
	placeholder,
	onChange,
	width = '200px',
	error
}) => {
	const onChangeInput: ChangeEventHandler<HTMLInputElement> = event => {
		onChange(event.currentTarget.value)
	}

	const onClickClear: MouseEventHandler<HTMLImageElement> = () => {
		onChange('')
	}

	const style = { width }

	return (
		<div>
			<div
				className={classNames(styles.wrapper, {
					[styles.hasError]: !!error
				})}
				style={style}
			>
				<input
					className={styles.input}
					type='text'
					value={value}
					placeholder={placeholder}
					onChange={onChangeInput}
				/>
				<div className={styles.icon}>
					{value.length ? (
						<Image
							src={closeIcon}
							width={24}
							height={24}
							alt='clear'
							onClick={onClickClear}
						/>
					) : (
						<div className={styles.search}>
							<Search color='#1D252E' />
						</div>
					)}
				</div>
			</div>
			{error && <p className={styles.error}>{error}</p>}
		</div>
	)
}
