import '../css/tailwind.css'

import {Head} from 'blitz'
import {AppProps} from 'next/app'

export default ({Component, pageProps}: AppProps) => (
  <>
    <Head>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Head>
    <div className="bg-gray-100 text-gray-900 antialiased font-sans">
      <Component {...pageProps} />
    </div>
  </>
)
