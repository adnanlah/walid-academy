import Link from 'next/link'
import StarRatingDisplay from './StarRatingDisplay'
import {Anchor, Box, Text, Center} from '@mantine/core'

export default function CourseCard({course}) {
  return (
    <Link href={`/courses/${course.id}`} passHref>
      <Anchor>
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
            {course.title}
          </Text>
          <Text size="sm" mb={2}>
            اداب وفلسفة
          </Text>
          <Center inline>
            <StarRatingDisplay rating={4} />
            <Text mr={3}>({course.reviewsCount})</Text>
          </Center>
          <Box>
            <Text size="sm">6 ساعات • 22 فيديو</Text>
          </Box>
        </Box>
      </Anchor>
    </Link>
  )
}
