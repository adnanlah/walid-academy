import Link from 'next/link'
import {Anchor, Box, Text, Center, Paper} from '@mantine/core'

export default function CourseCard({course}) {
  return (
    <Paper padding={0} style={{height: '17rem'}}>
      <Link href={`/courses/${course.id}`} passHref>
        <Anchor variant="text">
          <Box
            sx={theme => ({
              height: 130,
              backgroundColor: theme.colors.dark[9],
            })}
          >
            {/* THUMBNAIL GOES HERE */}
          </Box>
          <Box
            sx={theme => ({
              padding: theme.spacing.md,
            })}
          >
            <Text weight={700} mb={2}>
              {course.title}
            </Text>
            <Text size="sm" mb={2}>
              اداب وفلسفة
            </Text>
            <Box>
              <Text size="sm">6 ساعات • 22 فيديو</Text>
            </Box>
          </Box>
        </Anchor>
      </Link>
    </Paper>
  )
}
