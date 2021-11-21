import Link from 'next/link'
import RatingStars from './RatingStars'
import {Anchor, Box, Text, Center} from '@mantine/core'

export default function CourseCard(props) {
  return (
    <Link href="/courses/1" passHref>
      <Anchor component="a">
        <Box
          sx={theme => ({
            height: 200,
            backgroundColor: theme.colors.dark[9],
          })}
        ></Box>
        <Box
          sx={theme => ({
            padding: theme.spacing.xs,
          })}
        >
          <Text weight={700} mb={2}>
            {props.title}
          </Text>
          <Text size="sm" mb={2}>
            اداب وفلسفة
          </Text>
          <Center inline>
            <RatingStars rating={4} />
            <Text mr={3}>({props.reviewsCount})</Text>
          </Center>
          <Box>
            <Text size="sm">6 ساعات • 22 فيديو</Text>
          </Box>
        </Box>
      </Anchor>
    </Link>
  )
}
