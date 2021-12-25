import {
  Button,
  Center,
  Group,
  Loader,
  Paper,
  Progress,
  Text,
  Title,
} from '@mantine/core'
import {useEffect, useState} from 'react'
import usePost from 'hooks/usePost'
import {supermemo} from 'util/supermemo'
import Card from './Card'
import useSWR from 'swr'

const Flashcard = ({id}) => {
  const [currentSession, setCurrentSession] = useState(null)
  const [sessionCards, setSessionCards] = useState([])
  const [difficultCards, setDifficultCards] = useState([])
  const [cardIdx, setCardIdx] = useState(0)
  const [sessionIsOver, setSessionIsOver] = useState(false)
  // const [postingSession, setPostingSession] = useState(false)
  // const [errorPosting, setErrorPosting] = useState(null)
  const [postRes, apiMethod] = usePost({
    url: `https://my.backend/flashcards/sessionover/${id}/user/1`,
    payload: {},
  })
  const sessionLength = sessionCards.length

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
      apiMethod({sessionCards})
      //   fetch(
      //     `https://my.backend/flashcards/sessionover/${id}/user/1`,
      //     requestOptions,
      //   )
      //     .then(response => {
      //       if (!response.ok) throw new Error('Error')
      //       response.json()
      //     })
      //     .then(res => {
      //       setPostingSession(false)
      //     })
      //     .catch(err => setErrorPosting(err.message))
    }

    return () => {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, sessionIsOver])

  const nextCard = () => {
    if (cardIdx === sessionLength - 1) {
      if (difficultCards.length > 0) {
        setSessionCards(difficultCards) // <-- set session cards to difficult cards
        setDifficultCards([])
        setCardIdx(0)
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
                  {postRes.error && <Text>ERROR</Text>}
                </div>
                {postRes.isLoading && <Loader />}
                {!postRes.isLoading && (
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
