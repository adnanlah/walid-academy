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

        const minSessionLength = 5

        if (!user?.flashcardsProgress?.[fcId]) {
          user.flashcardsProgress[fcId] = {
            session: 0,
            cards: cards,
          }
        }

        const currentSession = user.flashcardsProgress[fcId].session
        const userCards = user.flashcardsProgress[fcId].cards

        const overdueCards = userCards.filter(
          c => c.dueSession === currentSession,
        )
        if (currentSession === 0) overdueCards.splice(minSessionLength)
        let newCards = []
        if (overdueCards.length < minSessionLength) {
          newCards = userCards
            .filter(c => c.dueSession === 0)
            .slice(0, minSessionLength - overdueCards.length)
        }

        console.debug({overdueCards, newCards})

        const sessionCards = shuffleArray([...overdueCards, ...newCards])
        return res(
          ctx.delay(2000),
          ctx.status(200),
          ctx.json({currentSession, sessionCards}),
        )
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
