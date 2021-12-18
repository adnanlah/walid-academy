if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../mocks')
}

import 'components/Elements/Toggle.css'

export default function MyApp({Component, pageProps}) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || (page => page)

  return getLayout(<Component {...pageProps} />)
}
