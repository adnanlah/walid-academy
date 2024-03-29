import {Anchor, Paper, Text} from '@mantine/core'
import Link from 'next/link'

const FlashcardCard = ({flashcard, ...restProps}) => {
  return (
    <Paper
      padding="lg"
      sx={theme => ({
        borderBottom: '4px solid',
        borderBottomColor: 'transparent',
        transition: 'all .12s ease-in',
        '&:hover': {
          borderBottomColor: theme.colors.indigo,
        },
      })}
    >
      <Link href={`/flashcards/${flashcard.id}`} passHref>
        <Anchor variant="text">
          <div
            style={{
              height: `8rem`,
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
        </Anchor>
      </Link>
    </Paper>
  )
}

export default FlashcardCard
