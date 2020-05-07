import 'styles/fonts.css'
import 'styles/main.css'

import {AppProps} from 'next/app'

export default ({Component, pageProps}: AppProps) => (
  <>
    <div className="min-h-screen font-sans antialiased text-gray-900 bg-gray-100">
      <Component {...pageProps} />
    </div>
  </>
)
