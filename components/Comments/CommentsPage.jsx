import {
  Anchor,
  Box,
  Divider,
  Text,
  Center,
  LoadingOverlay,
  Group,
  Avatar,
} from '@mantine/core'
import StarRatingDisplay from './StarRatingDisplay'

import useSWR from 'swr'

async function fetcher(url) {
  const res = await fetch(url)
  const json = await res.json()
  return json
}

const Reviews = ({courseId, page}) => {
  const reviewsPerPage = 5
  const {data, error} = useSWR(
    `https://my.backend/courses/${courseId}/reviews?limit=${reviewsPerPage}&offset=${
      page * reviewsPerPage
    }`,
    fetcher,
  )

  if (error) return <Center>فشل في التحميل</Center>

  const reviewsList = data?.map((review, idx) => {
    return (
      <div key={idx}>
        <Group mb="xl" align="start" noWrap>
          <Avatar></Avatar>
          <div>
            <div>
              <Box mb="xs">
                <Anchor
                  variant="text"
                  weight={700}
                  href={`users/${review.user.id}`}
                >
                  {review.user.name}
                </Anchor>
              </Box>
              <Box mb="xs">
                <StarRatingDisplay rating={review.rating} />
              </Box>
            </div>
            <Text>{review.text}</Text>
          </div>
        </Group>
        {data.length !== idx + 1 && <Divider mb="xl" />}
      </div>
    )
  })

  return (
    <div>
      <LoadingOverlay visible={!data} />
      {reviewsList}
    </div>
  )
}

export default Reviews
