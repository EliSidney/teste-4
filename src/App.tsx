import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function Myapp ({ Component, pageProps }: AppProps) {
    return (
	<>
	<Head>
	    <meta name="viewport"
		    content="Width=device-width, initial-scale=1" />
		</Head>
    <component {...pageProps} />
	</>
	)
}

export default Myapp	