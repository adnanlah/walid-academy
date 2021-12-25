import {
  Button,
  Center,
  Group,
  Loader,
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
  const [difficultCards, setDifficultCards] = useState([])
  const [cardIdx, setCardIdx] = useState(0)
  const [sessionIsOver, setSessionIsOver] = useState(false)
  const [postResponse, apiMethod] = useFetch({
    url: `https://my.backend/flashcards/sessionover/${id}/user/1`,
  })
  const sessionLength = sessionCards.length
  console.log('cardIdx', cardIdx)
  console.log('sessionCards', sessionCards)
  console.log('difficultCards', difficultCards)

  const {data, error, isValidating, mutate} = useSWR(
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
  }, [data, isValidating])

  useEffect(() => {
    if (sessionIsOver) {
      const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({sessionCards}),
      }
      apiMethod(requestOptions)
    }

    return () => {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, sessionIsOver])

  useEffect(() => {
    if (cardIdx === 0) {
      if (difficultCards.length > 0) {
        setSessionCards(difficultCards) // <-- set session cards to difficult cards
        setDifficultCards([])
      } else {
        setSessionIsOver(true)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardIdx])

  function reviewHandler(cardId, grade) {
    const idx = sessionCards.findIndex(c => c.id === cardId)
    const newFlashcard = practice(sessionCards[idx], grade, currentSession)
    sessionCards[idx] = newFlashcard
    if (grade < 4) setDifficultCards(v => [...v, newFlashcard])
    setCardIdx(i => (i + 1 === sessionLength ? 0 : i + 1))
  }

  return (
    <div>
      <div>
        {sessionIsOver && (
          <Paper
            style={{
              position: 'relative',
              height: 500,
            }}
          >
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
                      setCardIdx(0)
                      mutate()
                    }}
                  >
                    سلسلة جديدة
                  </Button>
                )}
              </Group>
            </Center>
          </Paper>
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
