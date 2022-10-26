import { FC } from 'react'

import { HeaderContacts } from '@layouts/DefaultLayout/components/Header/components/HeaderContacts'
import { MainBlock } from '@layouts/DefaultLayout/components/Header/components/MainBlock'

export const Header: FC = () => {
	return (
		<header>
			<HeaderContacts />
			<MainBlock />
		</header>
	)
}
