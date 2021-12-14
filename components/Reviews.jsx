import {
  Textarea,
  Title,
  Button,
  Box,
  Center,
  Loader,
  Group,
  Avatar,
  Anchor,
  Text,
  Divider,
} from '@mantine/core'
import useSWRInfinite from 'swr/infinite'
import RatingStars from './RatingStars'
import {useForm} from '@mantine/hooks'

// https://swr.vercel.app/docs/pagination#example-2-cursor-or-offset-based-paginated-api
const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.data) return null
  if (pageIndex === 0) return `https://my.backend/courses/1/reviews?limit=2`
  return `https://my.backend/courses/1/reviews?cursor=${previousPageData.nextCursor}&limit=2`
}

async function fetcher(url) {
  const res = await fetch(url)
  const json = await res.json()
  return json
}

const Reviews = ({courseId, ...restProps}) => {
  const form = useForm({
    initialValues: {
      reviewText: '',
    },

    validationRules: {
      reviewText: value => value.length > 2,
    },
  })

  const {data, error, size, setSize} = useSWRInfinite(getKey, fetcher)

  const isReachingEnd = data?.[data?.length - 1].nextCursor === null
  const isLoadingMore =
    (!data && !error) ||
    (size > 0 && data && typeof data[size - 1] === 'undefined')
  const isEmpty = data?.[0]?.length === 0

  let reviewsList = []

  if (!isEmpty) {
    // data returns an array of pages, each page has multiple reviews
    reviewsList = data?.map((reviewsPage, idx1) => {
      return reviewsPage.data.map((review, idx2) => (
        <Review
          review={review}
          key={review.id}
          first={idx1 === 0 && idx2 === 0}
        />
      ))
    })
  }

  const reviewForm = (
    <form onSubmit={form.onSubmit(values => console.log(values))}>
      <Textarea
        mb="xs"
        placeholder="اكتب تقييمك هنا"
        {...form.getInputProps('name')}
      ></Textarea>
      <Button type="submit">اضف</Button>
    </form>
  )

  return (
    <div {...restProps}>
      <Title order={4} mb="md">
        التقييمات
      </Title>
      <Box>{reviewForm}</Box>
      <Box sx={theme => ({padding: `${theme.spacing.md}px 0`})}>
        {error && <Center>فشل في التحميل</Center>}
        {isEmpty && <Text>لا يوجد تقييمات الان</Text>}
        {!isEmpty && reviewsList}
      </Box>
      {!isReachingEnd && (
        <Button
          disabled={isLoadingMore || isReachingEnd}
          color="dark"
          onClick={() => setSize(size + 1)}
        >
          {isLoadingMore && <Loader size="sm" ml="xs" />}
          <span>حمل اكثر</span>
        </Button>
      )}
    </div>
  )
}

const Review = ({review, first = false, ...restProps}) => {
  return (
    <div {...restProps}>
      {!first && <Divider my="xl" />}
      <Group align="start" noWrap>
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
              <RatingStars rating={review.rating} />
            </Box>
          </div>
          <Text>{review.text}</Text>
        </div>
      </Group>
    </div>
  )
}

export default Reviews
