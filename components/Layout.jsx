import {
  MantineProvider,
  NormalizeCSS,
  Global,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core'
import {useState} from 'react'
import Nav from './Nav'
import Footer from './Footer'

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

const baseSize = 14
const marginSize = 3

export default function Layout({children}) {
  const [colorScheme, setColorScheme] = useState('light')
  const toggleColorScheme = value =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
  return (
    <>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{
            colorScheme,
            fontSizes: {
              xs: baseSize - marginSize * 2,
              sm: baseSize - marginSize,
              md: baseSize,
              lg: baseSize + marginSize,
              xl: baseSize + marginSize * 2,
            },
            fontFamily: 'Noto Kufi Arabic, sans-serif',
            headings: {
              fontFamily: 'Noto Kufi Arabic, sans-serif',
            },
          }}
        >
          <NormalizeCSS />
          <GlobalStyles />

          <Nav />
          <main>{children}</main>
          <Footer />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  )
}
