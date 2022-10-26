import { Observer } from 'mobx-react-lite'
import { FC, MouseEventHandler, useRef, useState } from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import styles from './HeaderContacts.module.scss'
import instagramIcon from '@assets/icons/insta.svg'
import facebookIcon from '@assets/icons/facebook.svg'
import viberIcon from '@assets/icons/viber.svg'
import whatsappIcon from '@assets/icons/whatsapp.svg'
import languageStore, { Language } from '@stores/language.store'
import { ArrowUp } from '@assets/icons/ArrowUp'
import { useOutside } from '@hooks/useOutside'

export const HeaderContacts: FC = () => {
	const [languageSelectOpened, setLanguageSelectOpened] =
		useState<boolean>(false)
	const openLanguageSelect: MouseEventHandler<HTMLParagraphElement> = event => {
		event.stopPropagation()
		setLanguageSelectOpened(true)
	}
	const closeLanguageSelect = () => {
		setLanguageSelectOpened(false)
	}

	const languageSelectMenu = useRef<HTMLDivElement>(null)
	useOutside(languageSelectMenu, () => {
		closeLanguageSelect()
	})

	const onClickLanguageSelectItem = (
		language: Language
	): MouseEventHandler<HTMLParagraphElement> => {
		return () => {
			languageStore.setLanguage(language)
			closeLanguageSelect()
		}
	}

	return (
		<article className={styles.contactBlock}>
			<div className={styles.phoneAndSocials}>
				+(373) 22 83-87-87
				<p className={styles.line}>|</p>
				<Image
					className={styles.icon}
					src={instagramIcon}
					width={24}
					height={24}
					alt='instagram'
				/>
				<Image
					className={styles.icon}
					src={facebookIcon}
					width={24}
					height={24}
					alt='facebook'
				/>
				<Image
					className={styles.icon}
					src={viberIcon}
					width={24}
					height={24}
					alt='viber'
				/>
				<Image
					className={styles.icon}
					src={whatsappIcon}
					width={24}
					height={24}
					alt='whatsapp'
				/>
			</div>
			<div className={styles.languageSelectWrapper}>
				<Observer>
					{() => (
						<>
							<p className={styles.language} onClick={openLanguageSelect}>
								{languageStore.selectedLanguage.label}
								<span className={styles.icon}>
									<ArrowUp />
								</span>
							</p>
							<div
								ref={languageSelectMenu}
								className={classNames(styles.languageSelect, {
									[styles.opened]: languageSelectOpened
								})}
							>
								{languageStore.languages.map(language => (
									<p
										className={styles.languageItem}
										onClick={onClickLanguageSelectItem(language)}
										key={language.label}
									>
										{language.label}
									</p>
								))}
							</div>
						</>
					)}
				</Observer>
			</div>
		</article>
	)
}
