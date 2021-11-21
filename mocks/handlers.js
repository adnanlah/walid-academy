import {rest} from 'msw'
import {courses, users, lessons, comments, chapters} from '../data/index.js'

const getItem = (id, list) => list.find(e => e.id === parseInt(id))
const getItems = (id, list) => list.filter(e => e.id === parseInt(id))
const getCourses = id => courses.filter(c => c.user.id === parseInt(id))

export const handlers = [
  rest.get('https://my.backend/courses', (req, res, ctx) => {
    console.log('https://my.backend/courses')
    const query = req.url.searchParams.get('q')
    return res(ctx.json(courses))
  }),

  rest.get('https://my.backend/users/:userId/courses', (req, res, ctx) => {
    // const limit = req.url.searchParams.get('limit')
    // const startAt = req.url.searchParams.get('startAt')

    const {userId} = req.params

    // if (userId) return res(ctx.status(404))

    const courses = getCourses(userId)

    if (!courses) {
      return res(
        ctx.status(404),
        ctx.json({
          errorMessage: `Courses of the user ${userId} Not found`,
        }),
      )
    }

    return res(ctx.json(courses))
  }),

  rest.get('https://my.backend/courses/:id', (req, res, ctx) => {
    console.log('courses/:id')
    const {id} = req.params

    const course = getItem(id, courses)

    if (!course) {
      return res(
        ctx.status(404),
        ctx.json({
          errorMessage: 'Not found',
        }),
      )
    }

    return res(ctx.json(course))
  }),

  rest.get('https://my.backend/courses/:id/full', (req, res, ctx) => {
    console.log('courses/:id/full')
    const {id} = req.params

    const course = getItem(id, courses)

    course['chapters'] = chapters.map(c => ({...c, lessons}))

    if (!course) {
      return res(
        ctx.status(404),
        ctx.json({
          errorMessage: 'Not found',
        }),
      )
    }

    return res(ctx.json(course))
  }),

  rest.get('https://my.backend/users/:id', (req, res, ctx) => {
    const {id} = req.params

    const user = getItem(id, users)

    if (!user) {
      return res(
        ctx.status(404),
        ctx.json({
          errorMessage: 'Not found',
        }),
      )
    }

    return res(ctx.json(user))
  }),

  rest.get('https://my.backend/lessons/:id', (req, res, ctx) => {
    const {id} = req.params
    const lesson = getItem(id, lessons)

    if (!lesson) {
      return res(
        ctx.status(404),
        ctx.json({
          errorMessage: 'Not found',
        }),
      )
    }

    return res(ctx.json(lesson))
  }),

  rest.get('https://my.backend/lessons/:id/comments', (req, res, ctx) => {
    return res(ctx.json(comments))
  }),

  // rest.get('/course/:id/reviews', (req, res, ctx) => {
  //   return res(
  //     ctx.json([
  //       {
  //         id: '60333292-7ca1-4361-bf38-b6b43b90cb16',
  //         author: 'John Maverick',
  //         text: 'Lord of The Rings, is with no absolute hesitation, my most favored and adored book by‑far. The triology is wonderful‑ and I really consider this a legendary fantasy series. It will always keep you at the edge of your seat‑ and the characters you will grow and fall in love with!',
  //       },
  //     ])
  //   )
  // }),
]
