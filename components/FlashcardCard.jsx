import {Anchor, Group, Paper, Text} from '@mantine/core'
import {lorem} from '../util/helpers'

const FlashcardCard = ({flashcard, ...restProps}) => {
  return (
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
      {...restProps}
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
          <Anchor
            href={`/flashcards/${flashcard.id}`}
            color="dark"
            variant="text"
            weight={700}
          >
            {flashcard.title}
          </Anchor>
          <Text mb="xl" size="sm">
            {flashcard.cards.length} بطاقة
          </Text>
        </div>
        <Anchor href={`/users/1`} color="dark" variant="text">
          {flashcard.user.name}
        </Anchor>
      </div>
    </Paper>
  )
}

export default FlashcardCard
