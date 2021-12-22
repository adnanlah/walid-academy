import {Button, Center, Group, Paper, Text} from '@mantine/core'
import {EyeNoneIcon} from '@modulz/radix-icons'
import {useState} from 'react'

export default function Card({card, onReview}) {
  const [isDisplayAnswer, setIsDisplayAnswer] = useState(false)

  let frontElement = (
    <div>
      <Text size="lg" align="center" style={{userSelect: 'none'}}>
        {card.front}
      </Text>
    </div>
  )

  let backElement
  if (!isDisplayAnswer) {
    backElement = (
      <div
        style={{
          padding: '25px 50px',
          border: '1px dashed darkgray',
          cursor: 'pointer',
        }}
        onClick={() => setIsDisplayAnswer(true)}
      >
        <EyeNoneIcon />
      </div>
    )
  } else {
    backElement = (
      <Text
        size="lg"
        style={{
          padding: '25px 50px',
        }}
      >
        {card.back}
      </Text>
    )
  }

  return (
    <Paper
      style={{
        position: 'relative',
        height: 500,
      }}
    >
      <Center style={{height: '100%'}}>
        <Group direction="column" align="center">
          {frontElement}
          {backElement}
        </Group>
      </Center>
      <div
        style={{position: 'absolute', width: '100%', bottom: 0, padding: 20}}
      >
        <Text mb="xs" align="center">
          كيف كانت اجابتك؟
        </Text>
        <Group position="center">
          <Button
            disabled={!isDisplayAnswer}
            variant="filled"
            color="green"
            onClick={() => onReview(card.id, 5)}
          >
            اجابة مثالية
          </Button>
          <Button
            disabled={!isDisplayAnswer}
            variant="filled"
            color="teal"
            onClick={() => onReview(card.id, 4)}
          >
            اجابة صحيحة لكن بعد تردد
          </Button>
          <Button
            disabled={!isDisplayAnswer}
            variant="filled"
            color="cyan"
            onClick={() => onReview(card.id, 3)}
          >
            اجابة خاطئة لكن سهلة التذكر
          </Button>
          <Button
            disabled={!isDisplayAnswer}
            variant="filled"
            color="indigo"
            onClick={() => onReview(card.id, 2)}
          >
            اجابة خاطئة لكن صعبة التذكر
          </Button>
          <Button
            disabled={!isDisplayAnswer}
            variant="filled"
            color="grape"
            onClick={() => onReview(card.id, 0)}
          >
            اجابة خاطئة تماما
          </Button>
        </Group>
      </div>
    </Paper>
  )
}
