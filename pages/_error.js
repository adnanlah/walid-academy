import {
  Center,
  Title,
  NormalizeCSS,
  Paper,
  Anchor,
  Box,
  Text,
  Group,
} from '@mantine/core'
import {ExclamationTriangleIcon} from '@modulz/radix-icons'
import Layout from 'layouts/Layout'

export default function Error({statusCode}) {
  const errorMessage = statusCode
    ? `حدث خطأ ${statusCode} على الخادم`
    : 'حدث خطأ في العميل'

  let icon = <ExclamationTriangleIcon style={{width: 100, height: 100}} />

  return (
    <Paper radius={0}>
      <NormalizeCSS />
      <Center style={{height: '90vh'}}>
        <Group position="center" direction="column">
          <Box>{icon}</Box>
          <Box mb="xs">
            <Text size="xl" align="center" color="dimmed">
              {statusCode}
            </Text>
            <Text align="center" color="dimmed">
              {errorMessage}
            </Text>
          </Box>
          <Center>
            <Anchor inline href="/">
              ارحع للصفحة الرئيسية
            </Anchor>
          </Center>
        </Group>
      </Center>
    </Paper>
  )
}

Error.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

Error.getInitialProps = ({res, err}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return {statusCode}
}
