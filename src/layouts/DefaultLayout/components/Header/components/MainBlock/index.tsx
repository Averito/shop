import Image from 'next/image'
import { FC } from 'react'

import styles from './MainBlock.module.scss'
import hamburgerIcon from '@assets/icons/burger.svg'
import { SearchButton } from '@components/Buttons/SearchButton'

export const MainBlock: FC = () => {
	return (
		<div className={styles.mainBlock}>
			<Image
				className={styles.hamburger}
				src={hamburgerIcon}
				width={30}
				height={30}
				alt='hamburgerMenu'
			/>
			<div className={styles.logoBlock}>
				<h1 className={styles.logo}>YOUR LOGO</h1>
				<p className={styles.additionalText}>ADDITIONAL TEXT</p>
			</div>
			<SearchButton>Прайс-лист</SearchButton>
		</div>
	)
}
