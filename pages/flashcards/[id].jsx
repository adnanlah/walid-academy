import {ActionIcon, Avatar, Box, Group, Text, Title} from '@mantine/core'
import {Share1Icon, TwitterLogoIcon} from '@modulz/radix-icons'
import Layout from 'layouts/Layout'
import BgLayout from 'layouts/BgLayout'
import MyBreadcrumbs from 'components/MyBreadcrumbs'
import FlashcardPlayer from '@/components/Flashcards/FlashcardPlayer'

export default function Flashcards({flashcard}) {
  const categories = [
    {title: flashcard.branch, href: '/'},
    {title: flashcard.grade, href: '/'},
    {title: flashcard.subject, href: '/'},
  ]

  return (
    <main
      style={{
        width: '50%',
        margin: `0 auto`,
      }}
    >
      <Box component="section">
        <FlashcardPlayer cardsData={flashcard.cards} />
      </Box>

      <Box
        component="section"
        sx={theme => ({
          padding: `${theme.spacing.xl * 2}px 0`,
        })}
      >
        <Box mb="xl">
          <MyBreadcrumbs
            mb="xs"
            links={[
              {title: 'qwe', href: '#'},
              {title: '123', href: '#'},
              {title: 'zxc', href: '#'},
            ]}
          />
          <Title order={3}>{flashcard.title}</Title>
        </Box>
        <Group position="apart">
          <Group>
            <Avatar
              size="lg"
              src="/teacher.png"
              radius="xl"
              alt="no image here"
              color="blue"
            />
            <div>
              <Text size="sm">المدرس</Text>
              <Text>{flashcard.user.name}</Text>
            </div>
          </Group>
          <Group>
            <ActionIcon>
              <TwitterLogoIcon />
            </ActionIcon>
            <ActionIcon>
              <Share1Icon />
            </ActionIcon>
          </Group>
        </Group>
      </Box>
    </main>
  )
}

Flashcards.getLayout = function getLayout(page) {
  return (
    <Layout>
      <BgLayout>{page}</BgLayout>
    </Layout>
  )
}

export async function getServerSideProps({params, res}) {
  // const response = await fetch(
  //   `https://my.backend/users/${user.id}/flashcards/${params.id}`,
  // )
  const response = await fetch(`https://my.backend/flashcards/${params.id}`)

  if (!response.ok) {
    return {
      redirect: {
        notFound: true,
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
