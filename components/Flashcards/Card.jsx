import {Button, Center, Group, Paper, Text} from '@mantine/core'
import {EyeNoneIcon} from '@modulz/radix-icons'
import {useEffect, useState} from 'react'

export default function Card({card, onReview}) {
  const [isDisplayAnswer, setIsDisplayAnswer] = useState(false)

  useEffect(() => {
    setIsDisplayAnswer(false)
  }, [card])

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
          padding: '2rem 4rem',
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
    <>
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
            {/* perfect response */}
            اجابة مثالية
          </Button>
          <Button
            disabled={!isDisplayAnswer}
            variant="filled"
            color="teal"
            onClick={() => onReview(card.id, 4)}
          >
            {/* correct response after a hesitation */}
            اجابة صحيحة لكن بعد تردد
          </Button>
          <Button
            disabled={!isDisplayAnswer}
            variant="filled"
            color="cyan"
            onClick={() => onReview(card.id, 3)}
          >
            {/* correct response recalled with serious difficulty */}
            اجابة صحيحة لكن صعبة
          </Button>
          <Button
            disabled={!isDisplayAnswer}
            variant="filled"
            color="indigo"
            onClick={() => onReview(card.id, 2)}
          >
            {/* incorrect response; where the correct one seemed easy to recall */}
            اجابة خاطئة لكن سهلة
          </Button>
          <Button
            disabled={!isDisplayAnswer}
            variant="filled"
            color="grape"
            onClick={() => onReview(card.id, 0)}
          >
            {/* incorrect response; the correct one remembered */}
            اجابة خاطئة تماما
          </Button>
        </Group>
      </div>
    </>
  )
}
