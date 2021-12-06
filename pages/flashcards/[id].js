import {Box, Button, Center, Group, Progress, Text, Title} from '@mantine/core'
import ContentLayout from '../../components/ContentLayout'
import Layout from '../../components/Layout'
import MyContainer from '../../components/MyContainer'
import MyBreadcrumbs from '../../components/MyBreadcrumbs'
import Flashcard from '../../components/flashcard/Flashcard'

export default function Flashcards({flashcard}) {
  const categories = [
    {title: flashcard.branch, href: '/'},
    {title: flashcard.grade, href: '/'},
    {title: flashcard.subject, href: '/'},
  ]

  return (
    <div>
      <Box
        component="section"
        sx={theme => ({
          backgroundColor:
            theme.colorScheme === 'light'
              ? theme.colors.blue[9]
              : theme.colors.dark[9],
          padding: `${theme.spacing.xl}px 0`,
          marginBottom: theme.spacing.md,
          boxShadow: theme.shadows.md,
        })}
      >
        <MyContainer>
          <Box mb="xs">
            <MyBreadcrumbs links={categories} />
          </Box>
          <Title order={2}>فلاشكارد: {flashcard.title}</Title>
          <Title order={6}>عدد: {flashcard.cards.length}</Title>
        </MyContainer>
      </Box>
      <MyContainer padding="md">
        <Flashcard flashcardData={flashcard.cards} />
      </MyContainer>
    </div>
  )
}

Flashcards.getLayout = function getLayout(page) {
  return (
    <Layout>
      <ContentLayout>{page}</ContentLayout>
    </Layout>
  )
}

export async function getServerSideProps({params, res}) {
  const response = await fetch(`https://my.backend/flashcards/${params.id}`)

  if (!response.ok) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const flashcard = await response.json()

  return {
    props: {
      flashcard,
    },
  }
}
