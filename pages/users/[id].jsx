import {Box, Paper, Title} from '@mantine/core'
import Layout from 'layouts/Layout'
import BgLayout from 'layouts/BgLayout'
import MyContainer from 'components/MyContainer'
import CoursesShowcase from 'components/CoursesShowcase'

export default function User({user}) {
  return (
    <MyContainer py="xl">
      <Paper mb="xl" shadow="xs">
        <Box
          sx={theme => ({
            width: 300,
            height: 300,
            backgroundColor: theme.colors.dark[9],
          })}
        ></Box>
      </Paper>

      <Box padding="md">
        <Title order={4} mb="md">
          دروسي ({user.coursesCount})
        </Title>
        <CoursesShowcase api={`https://my.backend/users/${user.id}/courses`} />
      </Box>
    </MyContainer>
  )
}

User.getLayout = function getLayout(page) {
  return (
    <Layout>
      <BgLayout>{page}</BgLayout>
    </Layout>
  )
}

export async function getServerSideProps({params, res}) {
  const response = await fetch(`https://my.backend/users/${params.id}`)

  if (!response.ok) {
    // res.writeHead(302, {
    //   Location: '/courses'
    // })
    // res.end()
    return {
      redirect: {
        destination: '/courses',
        permanent: false,
      },
    }
  }

  const data = await response.json()

  return {
    props: {
      user: data,
    },
  }
}
