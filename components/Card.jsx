import {Anchor, Paper, Text} from '@mantine/core'
import Link from 'next/link'

const Card = ({children, ...restProps}) => {
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
      <Link href={`/flashcards/${flashcard.id}`} passHref>
        <Anchor variant="text">
          <div
            style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* <div>
              <Text weight={700} mb={2}>
                {flashcard.title}
              </Text>
              <Text mb="xl" size="sm">
                {flashcard.cards.length} بطاقة
              </Text>
            </div>
            <Text color="dimmed">{flashcard.user.name}</Text> */}
            {children}
          </div>
        </Anchor>
      </Link>
    </Paper>
  )
}

export default Card
