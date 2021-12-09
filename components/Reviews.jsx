import {
  Anchor,
  Box,
  Divider,
  Text,
  Textarea,
  Title,
  Pagination,
} from '@mantine/core'
import RatingStars from './RatingStars'

const Reviews = ({courseId, ...props}) => {
  const reviewForm = (
    <forn>
      <Textarea></Textarea>
    </forn>
  )
  const reviewsList = course.reviews.map((review, idx) => {
    return (
      <div key={idx}>
        <Box mb="xl">
          <div>
            <Anchor
              variant="text"
              weight={700}
              href={`users/${review.user.id}`}
              mb="xs"
            >
              {review.user.name}
            </Anchor>
            <Box mb="xs">
              <RatingStars rating={review.rating} />
            </Box>
          </div>
          <Text>{review.text}</Text>
        </Box>
        {course.reviews.length !== idx + 1 && <Divider mb="xl" />}
      </div>
    )
  })

  return (
    <div {...props}>
      <Title order={4} mb="md">
        التقييمات
      </Title>
      {reviewForm}
      {reviewsList}
      <Pagination />
    </div>
  )
}

export default Reviews
