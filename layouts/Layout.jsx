import {
  MantineProvider,
  NormalizeCSS,
  Global,
  ColorSchemeProvider,
} from '@mantine/core'
import {useLocalStorageValue} from '@mantine/hooks'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import BaseLayout from './BaseLayout'
import {SWRConfig} from 'swr'

export default function Layout({children}) {
  return (
    <BaseLayout>
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
    </BaseLayout>
  )
}
