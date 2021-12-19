import {rest} from 'msw'
import {
  courses,
  users,
  lessons,
  comments,
  chapters,
  reviews,
  flashcards,
  grades,
  branchs,
  subjects,
  provinces,
  districts,
  municipalities,
} from '../data/index.js'

const getItem = (id, list) => list.find(e => e.id === parseInt(id))
const getItems = (id, list) => list.filter(e => e.id === parseInt(id))
const getItemsByUserId = (id, list) =>
  list.filter(c => parseInt(c.user.id) === parseInt(id))

export const handlers = [
  rest.get('https://my.backend/courses', (req, res, ctx) => {
    let limit = parseInt(req.url.searchParams.get('limit'))
    return res(ctx.json(courses.slice(0, limit)))
  }),

  rest.get('https://my.backend/users/:userId/courses', (req, res, ctx) => {
    const {userId} = req.params
    // const offset = req.url.searchParams.get('offset')
    // const limit = req.url.searchParams.get('limit')

    if (isNaN(parseInt(userId))) return res(ctx.status(403))

    const userCourses = getItemsByUserId(userId, courses)

    if (!userCourses) {
      return res(
        ctx.status(404),
        ctx.json({
          errorMessage: `The user ${userId} doesnt have any courses!`,
        }),
      )
    }

    return res(ctx.json(courses))
  }),

  rest.get('https://my.backend/courses/:id', (req, res, ctx) => {
    const {id} = req.params

    const course = getItem(id, courses)

    if (!course) {
      return res(
        ctx.status(404),
        ctx.json({
          errorMessage: 'Course with such id is not found',
        }),
      )
    }

    return res(ctx.json(course))
  }),

  rest.get('https://my.backend/courses/:id/full', (req, res, ctx) => {
    const {id} = req.params

    const course = getItem(id, courses)

    if (!course) {
      return res(
        ctx.status(404),
        ctx.json({
          errorMessage: `Course with id: ${id} Not found`,
        }),
      )
    }

    // Here I append 2 chapter for each course no matter what
    // But I only append the lesson which belong to their respective chapter
    course['content'] = chapters.map(c => ({
      ...c,
      lessons: lessons.filter(lesson => lesson.chapterId === c.id),
    }))

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

  rest.get('https://my.backend/courses/:id/reviews', (req, res, ctx) => {
    // Pagination with the cursor pattern
    let cursor = parseInt(req.url.searchParams.get('cursor'))
    let limit = parseInt(req.url.searchParams.get('limit'))

    if (!cursor) cursor = reviews[0]?.id // first page

    const cursorIdx = reviews.findIndex(element => element.id === cursor)

    const data = reviews.slice(cursorIdx, cursorIdx + limit)
    const data2 = reviews.slice(cursorIdx, cursorIdx + limit + 1)

    const nextCursor =
      data.length >= data2.length ? null : data2[data2.length - 1].id

    return res(
      ctx.delay(1000),
      ctx.json({
        data,
        nextCursor,
      }),
    )
  }),

  rest.get('https://my.backend/flashcards', (req, res, ctx) => {
    let limit = parseInt(req.url.searchParams.get('limit'))
    return res(ctx.json(flashcards.slice(0, limit)))
  }),

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

  rest.get('https://my.backend/categories', (req, res, ctx) => {
    return res(
      ctx.json({
        grades,
        branchs,
        subjects,
      }),
    )
  }),

  rest.get('https://my.backend/divisions', (req, res, ctx) => {
    return res(
      ctx.json({
        provinces,
        districts,
        municipalities,
      }),
    )
  }),

  rest.post('https://my.backend/login', (req, res, ctx) => {
    console.log('logiiiing handler')
    const {email} = req.body
    return res(
      ctx.json({
        email,
        fullname: 'محمد علي',
      }),
    )
  }),
]
