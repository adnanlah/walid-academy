import {
  MantineProvider,
  NormalizeCSS,
  Global,
  ColorSchemeProvider,
} from '@mantine/core'
import {useLocalStorageValue} from '@mantine/hooks'
import {useState, useEffect} from 'react'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import {SWRConfig} from 'swr'

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
                paddingRight: '12px !important',
                paddingLeft: 30,
              },
              rightSection: {
                right: 'auto',
                left: '0 !important',
              },
            },
            PasswordInput: {
              input: {
                '& > input': {
                  textAlign: 'right',
                  paddingRight: '12px !important',
                  paddingLeft: 30,
                },
              },
              rightSection: {
                right: 'auto',
                left: '0 !important',
              },
            },
            DatePicker: {
              input: {
                textAlign: 'right',
              },
            },
            NumberInput: {
              rightSection: {
                right: 'auto',
                left: '0 !important',
              },
              input: {
                textAlign: 'right',
                paddingRight: '12px !important',
                paddingLeft: 30,
              },
              item: {
                textAlign: 'right',
              },
            },
            Autocomplete: {
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
            Select: {
              item: {textAlign: 'right'},
              input: {textAlign: 'right'},
            },
            Modal: {
              title: {fontWeight: 700},
            },
            Tabs: {
              tabIcon: {
                marginRight: '0 !important',
                marginLeft: 10,
              },
            },
            Progress: {
              bar: {left: 'initial', right: 0},
            },
            Badge: {
              root: {
                padding: '3px 6px',
              },
              rightSection: {
                marginRight: 5,
                marginLeft: 0,
              },
            },
            Select: {
              rightSection: {
                right: 'auto',
                left: '0 !important',
                pointerEvents: 'none',
              },
              input: {
                textAlign: 'right',
                paddingRight: '12px !important',
                paddingLeft: 30,
              },
              item: {
                textAlign: 'right',
              },
              disabled: {
                color: 'lightgray',
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
          <SWRConfig
            value={{
              fetcher: (resource, init) =>
                fetch(resource, init).then(res => res.json()),
            }}
          >
            {children}
          </SWRConfig>
          <Footer />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  )
}