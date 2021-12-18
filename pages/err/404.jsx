import {Center, Title, NormalizeCSS, Paper, Anchor, Box} from '@mantine/core'
import Layout from 'layouts/Layout'

export default function Custom404() {
  return (
    <Paper>
      <NormalizeCSS />
      <Center style={{height: '100vh'}}>
        <div>
          <Box mb="xs">
            <Title order={2} align="center" color="dimmed">
              404
            </Title>
            <Title order={4} align="center" color="dimmed">
              Makashou
            </Title>
          </Box>
          <Anchor href="/">ارحع للصفحة الرئيسية</Anchor>
        </div>
      </Center>
    </Paper>
  )
}

Custom404.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
