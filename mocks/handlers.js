import {rest} from 'msw'
import fcHandlers from './fcHandlers'
import {dummyData} from '../data/index.js'

const getItem = (id, list) => list.find(e => e.id === parseInt(id))
const getItems = (id, list) => list.filter(e => e.id === parseInt(id))
const getItemsByUserId = (id, list) =>
  list.filter(c => parseInt(c.user.id) === parseInt(id))

export const handlers = [
  ...fcHandlers,

  rest.get('https://my.backend/courses', (req, res, ctx) => {
    let limit = parseInt(req.url.searchParams.get('limit'))
    return res(ctx.json(dummyData.courses.slice(0, limit)))
  }),

  rest.get('https://my.backend/users/:userId/courses', (req, res, ctx) => {
    const {userId} = req.params
    // const offset = req.url.searchParams.get('offset')
    // const limit = req.url.searchParams.get('limit')

    if (isNaN(parseInt(userId))) return res(ctx.status(403))

    const userCourses = getItemsByUserId(userId, dummyData.courses)

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

    const course = getItem(id, dummyData.courses)

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

    const course = getItem(id, dummyData.courses)

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
    course['content'] = dummyData.chapters.map(c => ({
      ...c,
      lessons: dummyData.lessons.filter(lesson => lesson.chapterId === c.id),
    }))

    return res(ctx.json(course))
  }),

  rest.get('https://my.backend/users/:id', (req, res, ctx) => {
    const {id} = req.params

    const user = getItem(id, dummyData.users)

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
    const lesson = getItem(id, dummyData.lessons)

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
    return res(ctx.json(dummyData.comments))
  }),

  rest.get('https://my.backend/courses/:id/reviews', (req, res, ctx) => {
    // Pagination with the cursor pattern
    let cursor = parseInt(req.url.searchParams.get('cursor'))
    let limit = parseInt(req.url.searchParams.get('limit'))

    if (!cursor) cursor = dummyData.reviews[0]?.id // first page

    const cursorIdx = dummyData.reviews.findIndex(
      element => element.id === cursor,
    )

    const data = dummyData.reviews.slice(cursorIdx, cursorIdx + limit)
    const data2 = dummyData.reviews.slice(cursorIdx, cursorIdx + limit + 1)

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

  rest.get('https://my.backend/categories', (req, res, ctx) => {
    return res(
      ctx.json({
        grades: dummyData.grades,
        branchs: dummyData.branchs,
        subjects: dummyData.subjects,
      }),
    )
  }),

  rest.get('https://my.backend/divisions', (req, res, ctx) => {
    return res(
      ctx.json({
        provinces: dummyData.provinces,
        districts: dummyData.districts,
        municipalities: dummyData.municipalities,
      }),
    )
  }),

  rest.post('https://my.backend/login', (req, res, ctx) => {
    const {email} = req.body
    return res(
      ctx.json({
        email,
        fullname: 'محمد علي',
      }),
    )
  }),
]
