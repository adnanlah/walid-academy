import Layout from '../../../components/Layout'
import ContentLayout from '../../../components/ContentLayout'
import Comments from '../../../components/comments/Comments'
import Quiz from '../../../components/quiz/Quiz'

import {
  Box,
  Group,
  Text,
  Avatar,
  ActionIcon,
  Anchor,
  Title,
  Modal,
  ThemeIcon,
} from '@mantine/core'
import {
  FileIcon,
  QuestionMarkIcon,
  Share1Icon,
  TwitterLogoIcon,
} from '@modulz/radix-icons'
import LessonPlayer from '../../../components/LessonPlayer'
import {useState} from 'react'

const Lesson = ({lesson, course}) => {
  const [quizOpened, setquizOpened] = useState(false)
  return (
    <section>
      <div style={{width: '80%', margin: '0 auto'}}>
        <LessonPlayer lesson={lesson} lessonId={lesson.id} course={course} />
      </div>
      <Box
        sx={theme => ({
          padding: `${theme.spacing.xl * 2}px 0`,
          width: '50%',
          margin: `0 auto`,
        })}
      >
        <Box style={{flexGrow: 1}} mb="xl">
          <Title order={3}>{lesson.title}</Title>
        </Box>
        <Group position="apart" mb="xl">
          <Group>
            <Avatar
              size="lg"
              src="/teacher.png"
              radius="xl"
              alt="no image here"
              color="blue"
            />
            <div>
              <Text size="sm">المدرس</Text>
              <Text>{course.user.name}</Text>
            </div>
          </Group>
          <Group>
            <ActionIcon>
              <TwitterLogoIcon />
            </ActionIcon>

            <ActionIcon>
              <Share1Icon />
            </ActionIcon>
          </Group>
        </Group>

        <Box mb="md">
          <Text size="md" mb="xs" weight={700}>
            حول هدا الدرس
          </Text>
          <Text>{course.description}</Text>
        </Box>

        <Box mb="md">
          <Text size="md" mb="xs" weight={700}>
            تمارين
          </Text>
          <div onClick={() => setquizOpened(true)}>
            <Group>
              <ThemeIcon color="indigo" size="xl" variant="light">
                <QuestionMarkIcon />
              </ThemeIcon>
              <Text style={{cursor: 'pointer'}}>تمرين 1</Text>
            </Group>
          </div>
        </Box>

        <Box mb="md">
          <Text size="md" mb="xs" weight={700}>
            ملحقات
          </Text>
          <div>
            <Group>
              <ThemeIcon color="orange" size="xl" variant="light">
                <FileIcon />
              </ThemeIcon>
              <Anchor href="#" variant="text">
                ملحق 1
              </Anchor>
            </Group>
          </div>
        </Box>

        <Box mb="xl">
          <Comments lessonId={lesson.id} currentUserId={1} />
        </Box>

        <Modal
          size="60%"
          opened={quizOpened}
          onClose={() => setquizOpened(false)}
          title={lesson.title}
          styles={{
            header: {
              textAlign: 'center',
            },
            inner: {
              paddingTop: '5%',
              paddingBottom: '5%',
              alignItems: 'stretch',
            },
            modal: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
            },
            body: {
              flexGrow: 2,
            },
          }}
        >
          <Quiz questions={lesson.quiz} />
        </Modal>
      </Box>
    </section>
  )
}

Lesson.getLayout = function getLayout(page) {
  return (
    <Layout>
      <ContentLayout>{page}</ContentLayout>
    </Layout>
  )
}

export async function getServerSideProps({params, res}) {
  // http://localhost:3000/courses/1/lessons/1
  const lessonParams = params.lesson
  const courseSlug = params.slug

  if (!(lessonParams.length == 2 && lessonParams[0] == 'lessons')) {
    return {
      notFound: true,
    }
  }

  const lessonResponse = await fetch(
    `https://my.backend/lessons/${lessonParams[1]}`,
  )
  const courseResponse = await fetch(
    `https://my.backend/courses/${courseSlug}/full`,
  )

  if (!lessonResponse.ok || !courseResponse.ok) {
    return {
      redirect: {
        destination: '/courses',
        permanent: false,
      },
    }
  }

  const lessonData = await lessonResponse.json()
  const courseData = await courseResponse.json()

  return {
    props: {
      lesson: lessonData,
      course: courseData,
    },
  }
}

export default Lesson
