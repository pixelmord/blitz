import 'tippy.js/dist/tippy.css'

import {AppViewWrapper} from 'app/components/AppViewWrapper'
import {CSSReset} from 'app/components/CSSReset'
import {AppProps} from 'next/app'

const App = ({Component, pageProps}: AppProps) => (
  <>
    <CSSReset />
    <AppViewWrapper>
      <Component {...pageProps} />
    </AppViewWrapper>
  </>
)

export default App
