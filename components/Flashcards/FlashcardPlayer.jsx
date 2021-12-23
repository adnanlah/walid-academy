import {Button, Center, Progress} from '@mantine/core'
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
  const sessionLength = sessionCards.length

  const {data, error} = useSWR(`https://my.backend/flashcards/${id}/user/1`)

  useEffect(() => {
    if (data && !sessionCards.length) {
      setSessionCards(data.sessionCards)
      setCurrentSession(data.currentSession)
    }
  }, [data, sessionCards.length])

  const nextCard = () => {
    if (cardIdx === sessionLength - 1) {
      if (difficultCards.length > 0) {
        setCardIdx(0)
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
      <div>
        {sessionIsOver && <Center>انتهى</Center>}
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
        value={Math.floor((cardIdx / sessionLength) * 100)}
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
