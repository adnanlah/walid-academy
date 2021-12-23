import {rest} from 'msw'
import {dummyData} from '../data/index.js'
import {shuffleArray, mergeByProp} from 'util/helpers.js'

let {flashcards, users} = dummyData

const getItem = (id, list) => list.find(e => e.id === parseInt(id))

const handlers = [
  rest.get('https://my.backend/flashcards', (req, res, ctx) => {
    return res(ctx.json(flashcards))
  }),

  rest.get(
    'https://my.backend/flashcards/:fcId/user/:userId',
    (req, res, ctx) => {
      const {userId, fcId} = req.params
      const user = getItem(userId, users)
      const fc = getItem(fcId, flashcards)
      const currentSession = user.flashcardsProgress[fcId].session
      const sessionLength = 5

      let cards = fc.cards.map(c => ({
        ...c,
        interval: 0,
        repetition: 0,
        efactor: 2.5,
        dueSession: 0,
      }))

      const getCards = (cards, sessionNumber, maxOverdue = 0.8) => {
        const overdueLength = Math.floor(sessionLength * maxOverdue)
        const overdueCards = cards
          .filter(c => c.dueSession === sessionNumber && c.dueSession !== 0)
          .slice(0, overdueLength)
        let newCards = []
        if (overdueCards.length <= sessionLength) {
          newCards = cards
            .filter(c => c.dueSession === 0)
            .slice(0, sessionLength - overdueCards.length)
        }
        return shuffleArray([...overdueCards, ...newCards])
      }

      const sessionCards = getCards(cards, currentSession)
      console.log({currentSession, sessionCards})
      return res(ctx.json({currentSession, sessionCards}))
    },
  ),

  rest.post(
    'https://my.backend/flashcards/sessionover/:fcId/user/:userId',
    (req, res, ctx) => {
      const {userId, fcId} = req.params
      const user = getItem(userId, users)
      const {session} = req.body
      console.log('session i got is: ', session)
      // store the session in
      mergeByProp(user.flashcardsProgress.cards, session)
      console.log(
        'I merged the new session with the old cards ',
        user.flashcardsProgress.cards,
      )
      return res(ctx.json(flashcards))
    },
  ),

  rest.get('https://my.backend/flashcards/:id', (req, res, ctx) => {
    const {id} = req.params
    const flashcard = getItem(id, flashcards)

    if (!flashcard) {
      return res(
        ctx.status(404),
        ctx.json({
          errorMessage: 'Not found',
        }),
      )
    }

    return res(ctx.json(flashcard))
  }),
]

export default handlers
