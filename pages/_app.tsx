import type { AppProps } from 'next/app'

import { DefaultLayout } from '@layouts/DefaultLayout'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<DefaultLayout>
			<Component {...pageProps} />
		</DefaultLayout>
	)
}

export default MyApp
