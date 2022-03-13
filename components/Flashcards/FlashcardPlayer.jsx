import {
  Button,
  Center,
  Group,
  Loader,
  LoadingOverlay,
  Paper,
  Progress,
  Text,
} from '@mantine/core'
import {useEffect, useState} from 'react'
import useFetch from 'hooks/useFetch'
import {supermemo} from 'util/supermemo'
import Card from './Card'
import useSWR from 'swr'

const Flashcard = ({id}) => {
  const [currentSession, setCurrentSession] = useState(null)
  const [sessionCards, setSessionCards] = useState([])
  const [cardIdx, setCardIdx] = useState(0)
  const [sessionIsOver, setSessionIsOver] = useState(false)
  const [postResponse, apiMethod] = useFetch({
    url: `https://my.backend/flashcards/sessionover/${id}/user/1`,
  })
  const sessionLength = sessionCards.length
  const {data, error, mutate} = useSWR(
    `https://my.backend/flashcards/${id}/user/1`,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )

  useEffect(() => {
    if (data) {
      setCardIdx(0)
      setSessionIsOver(false)
      setSessionCards(data.sessionCards)
      setCurrentSession(data.currentSession)
    }
  }, [data])

  useEffect(() => {
    // console.log('b4 sending post', sessionIsOver)
    if (sessionIsOver) {
      const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({sessionCards}),
      }
      // console.log('sending post', sessionIsOver)
      apiMethod(requestOptions)
    }

    return () => {}
  }, [apiMethod, sessionCards, sessionIsOver])

  function reviewHandler(cardId, grade) {
    const idx = sessionCards.findIndex(c => c.id === cardId)
    const newFlashcard = practice(sessionCards[idx], grade, currentSession)
    sessionCards[idx] = newFlashcard
    // add difficult cards to the end of session cards
    if (grade < 4) setSessionCards(s => [...s, newFlashcard])
    nextCard()
  }

  function nextCard() {
    if (cardIdx < sessionLength - 1) {
      // the card before the last one
      setCardIdx(i => i + 1)
    } else {
      setSessionIsOver(true)
    }
  }

  if (error) return <Text>ERROR</Text>

  return (
    <div>
      <Paper
        padding={0}
        style={{
          position: 'relative',
          height: '35rem',
        }}
      >
        <LoadingOverlay visible={!data} />
        {!!sessionIsOver && (
          <Center style={{height: '100%'}}>
            <Group direction="column" align="center">
              <div>
                <Text>انتهى</Text>
                {postResponse.error && <Text>ERROR</Text>}
              </div>
              {postResponse.isLoading && <Loader />}
              {!postResponse.isLoading && (
                <Button
                  onClick={() => {
                    mutate()
                  }}
                >
                  سلسلة جديدة
                </Button>
              )}
            </Group>
          </Center>
        )}
        {!!(!sessionIsOver && sessionCards.length) && (
          <Card
            key={sessionCards[cardIdx].id}
            card={sessionCards[cardIdx]}
            onReview={reviewHandler}
          />
        )}
      </Paper>

      <Progress
        radius={0}
        value={
          sessionIsOver ? 100 : Math.floor((cardIdx / sessionLength) * 100)
        }
      />
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
