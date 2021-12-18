import {Center, Title, NormalizeCSS} from '@mantine/core'
import BaseLayout from 'layouts/BaseLayout'

export default function Custom500() {
  return (
    <>
      <NormalizeCSS />
      <Center style={{height: '100vh'}}>
        <div>
          <Title order={2} align="center" color="dimmed">
            500
          </Title>
          <Title order={4} align="center" color="dimmed">
            Men 3ndhem
          </Title>
        </div>
      </Center>
    </>
  )
}

Custom500.getLayout = function getLayout(page) {
  return <BaseLayout>{page}</BaseLayout>
}
