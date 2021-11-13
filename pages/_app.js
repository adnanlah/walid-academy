if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../mocks')
}

import {
  MantineProvider,
  NormalizeCSS,
  Global,
  createStyles,
} from '@mantine/core'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const useStyles = createStyles(theme => {
  return {
    container: {
      padding: `0 15%`,
    },
  }
})

export function GlobalStyles() {
  return (
    <Global
      styles={theme => ({
        body: {
          fontFamily: 'Noto Kufi Arabic, sans-serif',
          fontSize: theme.fontSizes.md,
        },
      })}
    />
  )
}

const baseSize = 16
const marginSize = 4

// export default function MyApp({ Component, pageProps }) {
// Use the layout defined at the page level, if available
//   return getLayout(<Component {...pageProps} />)
// }

export default function App({Component, pageProps}) {
  // const getLayout = Component.getLayout || ((page) => page)
  console.log(`Component.getLayout`, Component.getLayout)
  if (Component.getLayout)
    return Component.getLayout(<Component {...pageProps} />)

  const {classes} = useStyles()
  return (
    <>
      <MantineProvider
        theme={{
          fontSizes: {
            xs: baseSize - marginSize * 2,
            sm: baseSize - marginSize,
            md: baseSize,
            lg: baseSize + marginSize,
            xl: baseSize + marginSize * 2,
          },
          fontFamily: 'Noto Kufi Arabic, sans-serif',
          headings: {fontFamily: 'Noto Kufi Arabic, sans-serif'},
        }}
      >
        <NormalizeCSS />
        <GlobalStyles />

        <Nav />
        <Component {...pageProps} />
        <Footer />
      </MantineProvider>
    </>
  )
}
