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
      console.log('get request fc')
      const {userId, fcId} = req.params
      const user = getItem(userId, users)
      const {cards} = getItem(fcId, flashcards)
      const currentSession = user.flashcardsProgress[fcId].session
      const sessionLength = 7

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
      console.log('post request fc')
      const {userId, fcId} = req.params
      const user = getItem(userId, users)
      const {sessionCards} = req.body

      // store the sessionCards in
      mergeByProp(user.flashcardsProgress[fcId].cards, sessionCards, 'id')
      // increment the user's session pointer
      user.flashcardsProgress[fcId].session++
      return res(
        ctx.delay(2000),
        ctx.status(200),
        ctx.json({message: 'all good'}),
      )
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
