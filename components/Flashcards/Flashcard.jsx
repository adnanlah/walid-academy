import {Center, Progress} from '@mantine/core'
import {useCallback, useEffect, useRef, useState} from 'react'
import {supermemo} from './supermemo'
import {shuffleArray} from 'util/helpers'
import Card from './Card'

const practice = (flashcard, grade, session) => {
  const {interval, repetition, efactor} = supermemo(flashcard, grade)
  const dueSession = session + interval
  const newFlashcard = {
    ...flashcard,
    dueSession,
    interval,
    repetition,
    efactor,
  }
  return newFlashcard
}

const Flashcard = ({flashcardData}) => {
  const [session, setSession] = useState(0)
  const [cardIdx, setCardIdx] = useState(0)
  const sessionMax = 15

  const cards = useRef(
    flashcardData.map(c => ({
      ...c,
      interval: 0,
      repetition: 0,
      efactor: 2.5,
      dueSession: 0,
    })),
  )

  const getCards = useCallback((cards, session, maxOverdue = 0.8) => {
    const overdueLength = Math.floor(sessionMax * maxOverdue)
    const overdueCards = cards
      .filter(c => c.dueSession <= session && c.dueSession !== 0)
      .slice(0, overdueLength)
    let newCards = []
    if (overdueCards.length <= sessionMax) {
      newCards = cards
        .filter(c => c.dueSession === 0)
        .slice(0, sessionMax - overdueCards.length)
    }
    return shuffleArray([...overdueCards, ...newCards])
  }, [])

  const [sessionCards, setSessionCards] = useState(() =>
    getCards(cards.current, session),
  )

  const lengthOfSessionCards = sessionCards.length

  const difficultCards = useRef([])

  const nextCard = () => {
    if (cardIdx === lengthOfSessionCards - 1) {
      setCardIdx(0)
      if (difficultCards.current.length > 0) {
        setSessionCards(difficultCards.current)
        difficultCards.current = []
      } else {
        setSession(s => s + 1)
      }
    } else {
      setCardIdx(i => Math.min(lengthOfSessionCards - 1, i + 1))
    }
  }

  useEffect(() => {
    setSessionCards(getCards(cards.current, session))
  }, [getCards, session])

  const reviewHandler = (cardId, grade) => {
    const idx = cards.current.findIndex(c => c.id === cardId)
    const newFlashcard = practice(cards.current[idx], grade, session)
    cards.current[idx] = newFlashcard
    if (grade < 4) difficultCards.current.push(newFlashcard)
    nextCard()
  }

  return (
    <div>
      {lengthOfSessionCards && (
        <Card
          key={Math.random()}
          card={sessionCards[cardIdx]}
          onReview={reviewHandler}
        />
      )}

      {!lengthOfSessionCards && (
        <Center
          sx={theme => ({
            position: 'relative',
            height: 500,
            backgroundColor: theme.colors.blue[0],
          })}
        >
          انتهى
        </Center>
      )}

      <Progress
        radius={0}
        value={Math.ceil(((cardIdx + 1) / lengthOfSessionCards) * 100)}
      />
      {/* <Group position="apart">
        <Title order={4}>Session: {session}</Title>
        <Title order={4}>
          Difficult length: {difficultCards.current.length}
        </Title>
      </Group> */}
    </div>
  )
}

export default Flashcard
