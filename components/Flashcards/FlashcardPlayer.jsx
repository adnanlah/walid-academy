import {Button, Center, Loader, Progress, Text, Title} from '@mantine/core'
import {useEffect, useState} from 'react'
import {supermemo} from 'util/supermemo'
import Card from './Card'
import useSWR from 'swr'

const Flashcard = ({id}) => {
  const [currentSession, setCurrentSession] = useState(null)
  const [sessionCards, setSessionCards] = useState([])
  const [difficultCards, setDifficultCards] = useState([])
  const [cardIdx, setCardIdx] = useState(0)
  const [sessionIsOver, setSessionIsOver] = useState(false)
  const [postingSession, setPostingSession] = useState(false)
  const sessionLength = sessionCards.length

  const {data, error, isValidating, mutate} = useSWR(
    `https://my.backend/flashcards/${id}/user/1`,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )

  // const newSession = () => {
  //   setCardIdx(0)
  //   mutate()
  // }

  useEffect(() => {
    console.log('isValidating 1: ', isValidating)
    console.log('useEffect data changed')
    if (data) {
      console.log('isValidating 2: ', isValidating, data)
      setCardIdx(0)
      setSessionIsOver(false)
      setSessionCards(data.sessionCards)
      setCurrentSession(data.currentSession)
    }
  }, [data, isValidating])

  useEffect(() => {
    if (sessionIsOver) {
      setPostingSession(true)
      const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({sessionCards}),
      }

      fetch(
        `https://my.backend/flashcards/sessionover/${id}/user/1`,
        requestOptions,
      )
        .then(response => response.json())
        .then(res => {
          setPostingSession(false)
        })
    }

    return () => {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, sessionIsOver])

  const nextCard = () => {
    if (cardIdx === sessionLength - 1) {
      if (difficultCards.length > 0) {
        setSessionCards(difficultCards) // <-- set session cards to difficult cards
        setDifficultCards([])
      } else {
        setSessionIsOver(true)
      }
    } else {
      setCardIdx(i => Math.min(sessionLength - 1, i + 1))
    }
  }

  const reviewHandler = (cardId, grade) => {
    const idx = sessionCards.findIndex(c => c.id === cardId)
    const newFlashcard = practice(sessionCards[idx], grade, currentSession)
    sessionCards[idx] = newFlashcard
    if (grade < 4) setDifficultCards(v => [...v, newFlashcard])
    nextCard()
  }

  return (
    <div>
      <Title>isValidating: {isValidating}</Title>
      <div>
        {sessionIsOver && (
          <Center>
            <Text>انتهى</Text>
            {postingSession && <Loader />}
            {!postingSession && (
              <Button
                onClick={() => {
                  setCardIdx(0)
                  mutate()
                }}
              >
                Next session
              </Button>
            )}
          </Center>
        )}
        {!sessionIsOver && sessionCards.length && (
          <Card
            key={Math.random()}
            card={sessionCards[cardIdx]}
            onReview={reviewHandler}
          />
        )}
      </div>

      <Progress
        radius={0}
        value={
          sessionIsOver ? 100 : Math.floor((cardIdx / sessionLength) * 100)
        }
      />
      {/* <div>
        <div>
          SessionIsOver: {sessionIsOver ? 'true' : 'false'}
        </div>
        <div>Difficult length: {difficultCards.length}</div>
      </div> */}
    </div>
  )
}

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

export default Flashcard
