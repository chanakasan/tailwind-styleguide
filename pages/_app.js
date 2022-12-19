import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tailwind CSS Styleguide</title>
      </Head>

			<main className="bg-gray-50 px-6 py-6">
				<Component {...pageProps} />
			</main>
    </>
  )
}

export default MyApp
