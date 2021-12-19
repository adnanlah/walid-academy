import {Anchor, Paper, Text} from '@mantine/core'
import Link from 'next/link'

const FlashcardCard = ({flashcard, ...restProps}) => {
  return (
    <Link href={`/flashcards/${flashcard.id}`} passHref {...restProps}>
      <Anchor>
        <Paper
          padding="lg"
          sx={theme => ({
            height: `11rem`,
            borderBottom: '4px solid',
            borderBottomColor: 'transparent',
            transition: 'all .12s ease-in',
            '&:hover': {
              borderBottomColor: theme.colors.cyan,
            },
          })}
        >
          <div
            style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <Text weight={700} mb={2}>
                {flashcard.title}
              </Text>
              <Text mb="xl" size="sm">
                {flashcard.cards.length} بطاقة
              </Text>
            </div>
            <Text color="dimmed">{flashcard.user.name}</Text>
          </div>
        </Paper>
      </Anchor>
    </Link>
  )
}

export default FlashcardCard
