import {Button, Center, Group, Text} from '@mantine/core'
import {EyeNoneIcon} from '@modulz/radix-icons'
import {useState} from 'react'

export default function Card({card, reviewHandler}) {
  const [isDisplayAnswer, setIsDisplayAnswer] = useState(false)

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
    <Center
      sx={theme => ({
        position: 'relative',
        height: 500,
        backgroundColor: 'white',
      })}
    >
      <Group direction="column" grow>
        <Text size="lg" align="center" style={{userSelect: 'none'}}>
          {card.front}
        </Text>
        {backElement}
      </Group>
      <div style={{position: 'absolute', bottom: 0, padding: 20}}>
        <Text mb="xs" align="center">
          كيف كانت اجابتك؟
        </Text>
        <Group>
          <Button
            variant="filled"
            color="green"
            onClick={() => reviewHandler(card.id, 5)}
          >
            اجابة مثالية
          </Button>
          <Button
            variant="filled"
            color="teal"
            onClick={() => reviewHandler(card.id, 4)}
          >
            اجابة صحيحة لكن بعد تردد
          </Button>
          <Button
            variant="filled"
            color="cyan"
            onClick={() => reviewHandler(card.id, 3)}
          >
            اجابة خاطئة لكن سهلة التذكر
          </Button>
          <Button
            variant="filled"
            color="indigo"
            onClick={() => reviewHandler(card.id, 2)}
          >
            اجابة خاطئة لكن صعبة التذكر
          </Button>
          <Button
            variant="filled"
            color="grape"
            onClick={() => reviewHandler(card.id, 0)}
          >
            اجابة خاطئة تماما
          </Button>
        </Group>
      </div>
    </Center>
  )
}
