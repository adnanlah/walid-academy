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
      try {
        const {userId, fcId} = req.params
        const user = getItem(userId, users)
        const {cards} = getItem(fcId, flashcards)
        const currentSession = user.flashcardsProgress?.[fcId]?.session || 0
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
        return res(ctx.json({currentSession, sessionCards}))
      } catch (err) {
        return res(
          ctx.delay(2000),
          ctx.status(500),
          ctx.json({message: `my custom msg is ${err}`}),
        )
      }
    },
  ),

  rest.post(
    'https://my.backend/flashcards/sessionover/:fcId/user/:userId',
    (req, res, ctx) => {
      console.log('post request fc')
      try {
        const {userId, fcId} = req.params
        const user = getItem(userId, users)
        const {sessionCards} = req.body

        if (!user?.flashcardsProgress?.[fcId]) {
          user.flashcardsProgress[fcId] = {
            session: 0,
            cards: [],
          }
        }

        if (!user.flashcardsProgress[fcId]) {
          // first time playing this flashcard
          user.flashcardsProgress[fcId] = {
            session: 0,
            cards: [],
          }
        }

        // merge new session cards with the old ones
        mergeByProp(user.flashcardsProgress[fcId].cards, sessionCards, 'id')
        // increment the user's session pointer
        user.flashcardsProgress[fcId].session++
        return res(
          ctx.delay(2000),
          ctx.status(200),
          ctx.json({message: 'all good', user}),
        )
      } catch (err) {
        console.log('i catched an error ', err)
        return res(
          ctx.delay(2000),
          ctx.status(500),
          ctx.json({message: `my custom msg is ${err}`}),
        )
      }
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
