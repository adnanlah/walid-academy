import {
  MantineProvider,
  NormalizeCSS,
  Global,
  ColorSchemeProvider,
  Portal,
} from '@mantine/core'
import {useLocalStorageValue} from '@mantine/hooks'
import {useState, useRef, useEffect} from 'react'
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
  // const myContainer = useRef(null)
  const [colorScheme, setColorScheme] = useLocalStorageValue({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
  })

  const toggleColorScheme = value =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  const [_document, set_document] = useState(null)

  useEffect(() => {
    set_document(document)
  }, [])

  // useEffect(() => {
  //   myContainer.current = document.getElementById('main')
  //   console.log(
  //     'myContainer ref',
  //     myContainer.current,
  //     typeof myContainer.current,
  //   )
  //   return () => {}
  // }, [myContainer])

  return (
    <>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          styles={{
            TextInput: {
              input: {
                textAlign: 'right',
              },
              item: {
                textAlign: 'right',
              },
            },
            Textarea: {
              input: {
                textAlign: 'right',
              },
            },
          }}
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

          <main id="main">
            {_document && (
              <Portal target={_document.getElementsByTagName('main')[0]} />
            )}
            {children}
          </main>
          <Footer />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  )
}
