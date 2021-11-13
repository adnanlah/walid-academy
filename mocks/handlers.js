import { rest } from 'msw'
import courses from '../data/courses'

const getCourse = id => courses.find(c => c.id === parseInt(id))

export const handlers = [
  rest.get('https://my.backend/courses', (req, res, ctx) => {
    return res(
      ctx.json(courses)
    )
  }),

  rest.get('https://my.backend/courses/:id', (req, res, ctx) => {
    const { id } = req.params;
    
    const course = getCourse(id)
    
    if (!course) {
      return res(
        ctx.status(404),
        ctx.json({
          errorMessage: 'Not found',
        }),
      )
    }

    return res(
      ctx.json(course)
    )
  }),

  // rest.get('https://my.backend/course/:id/reviews', (req, res, ctx) => {
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