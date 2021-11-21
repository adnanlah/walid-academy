import Layout from '../../../components/Layout'
import ContentLayout from '../../../components/ContentLayout'
import Comments from '../../../components/comments/Comments'
import RoundedContainer from '../../../components/RoundedContainer'
import Quiz from '../../../components/quiz/Quiz'

import {
  Accordion,
  Box,
  Group,
  Col,
  createStyles,
  Grid,
  Paper,
  Divider,
  Text,
  Avatar,
  Center,
  ActionIcon,
  Anchor,
  Title,
} from '@mantine/core'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DownloadIcon,
} from '@modulz/radix-icons'

const LessonItem = ({children, link}) => {
  return (
    <Anchor href={link}>
      <Group
        sx={theme => ({
          width: '100%',
          margin: 0,
          '&:hover': {
            cursor: 'pointer',
            backgroundColor: theme.colors.blue[1],
          },
        })}
      >
        {children}
      </Group>
    </Anchor>
  )
}
LessonItem.Number = function LessonItemNumber({children, ...restProps}) {
  return (
    <ActionIcon
      variant="outline"
      radius="xl"
      size="lg"
      styles={theme => ({
        outline: {
          borderColor:
            theme.colorScheme === 'light'
              ? theme.colors.gray[4]
              : theme.colors.gray[6],
          color:
            theme.colorScheme === 'light'
              ? theme.colors.gray[6]
              : theme.colors.gray[4],
        },
      })}
      {...restProps}
    >
      {children}
    </ActionIcon>
  )
}
LessonItem.Content = function LessonItemContent({children, ...restProps}) {
  return (
    <Box style={{flexGrow: 1}} {...restProps}>
      {children}
    </Box>
  )
}

const useStyles = createStyles(theme => {
  return {
    video: {
      height: 800,
      backgroundColor: `black`,
    },
  }
})

const Lesson = ({lesson, course}) => {
  const chapterList = course.chapters.map(c => {
    return (
      <Accordion.Item key={c.id} label={c.title}>
        {c.lessons.map((les, idx) => {
          return (
            <LessonItem key={les.id} link={`${les.id}`}>
              <LessonItem.Number>{idx}</LessonItem.Number>
              <LessonItem.Content>
                <Text size="sm" weight={500}>
                  {les.title}
                </Text>
                <Text size="xs" color="dimmed">
                  7 دقائق
                </Text>
              </LessonItem.Content>
            </LessonItem>
          )
        })}
      </Accordion.Item>
    )
  })

  const quizData = {
    title: 'الكويز الاول: عنوان للكويز هنا',
    description: 'شرح بسيط او اي اضافة لعنوان الكويز هنا',
    questions: [
      {
        id: 1,
        imageUrl: 'https://placekitten.com/408/287',
        content: 'السؤاال الاول هو كاالتالي',
        correctAnswer: 3,
        options: [
          {
            id: 1,
            content: 'الخيار رقم واحد هنا والخيار الثاني هناك',
            isCorrent: false,
          },
          {
            id: 2,
            content: 'الخيار رقم واحد هنا والخيار الثاني هناك',
            isCorrent: false,
          },
          {
            id: 3,
            content: 'الخيار رقم واحد هنا والخيار الثاني هناك',
            isCorrent: false,
          },
          {
            id: 4,
            content: 'الخيار رقم واحد هنا والخيار الثاني هناك',
            isCorrent: true,
          },
        ],
      },
      {
        id: 2,
        imageUrl: 'https://placekitten.com/408/287',
        content: 'السؤاال الاول هو كاالتالي',
        correctAnswer: 1,
        options: [
          {
            id: 1,
            content: 'الخيار رقم واحد هنا والخيار الثاني هناك',
            isCorrent: false,
          },
          {
            id: 2,
            content: 'الخيار رقم واحد هنا والخيار الثاني هناك',
            isCorrent: false,
          },
          {
            id: 3,
            content: 'الخيار رقم واحد هنا والخيار الثاني هناك',
            isCorrent: false,
          },
          {
            id: 4,
            content: 'الخيار رقم واحد هنا والخيار الثاني هناك',
            isCorrent: true,
          },
        ],
      },
      {
        id: 3,
        imageUrl: 'https://placekitten.com/408/287',
        content: 'السؤاال الاول هو كاالتالي',
        correctAnswer: 2,
        options: [
          {
            id: 1,
            content: 'الخيار رقم واحد هنا والخيار الثاني هناك',
            isCorrent: false,
          },
          {
            id: 2,
            content: 'الخيار رقم واحد هنا والخيار الثاني هناك',
            isCorrent: false,
          },
          {
            id: 3,
            content: 'الخيار رقم واحد هنا والخيار الثاني هناك',
            isCorrent: false,
          },
          {
            id: 4,
            content: 'الخيار رقم واحد هنا والخيار الثاني هناك',
            isCorrent: true,
          },
        ],
      },
      {
        id: 4,
        imageUrl: 'https://placekitten.com/408/287',
        content: 'السؤاال الاول هو كاالتالي',
        correctAnswer: 3,
        options: [
          {
            id: 1,
            content: 'الخيار رقم واحد هنا والخيار الثاني هناك',
            isCorrent: false,
          },
          {
            id: 2,
            content: 'الخيار رقم واحد هنا والخيار الثاني هناك',
            isCorrent: false,
          },
          {
            id: 3,
            content: 'الخيار رقم واحد هنا والخيار الثاني هناك',
            isCorrent: false,
          },
          {
            id: 4,
            content: 'الخيار رقم واحد هنا والخيار الثاني هناك',
            isCorrent: true,
          },
        ],
      },
    ],
  }

  return (
    <Grid columns={12} gutter={0}>
      <Col span={2}>
        <Paper
          sx={theme => ({
            minHeight: '100%',
            height: '100%',
          })}
        >
          <Box
            sx={theme => ({
              padding: theme.spacing.xs,
            })}
          >
            <Text weight={500} align="center">
              {course.title}
            </Text>
          </Box>
          <Divider size="xs"></Divider>
          <Accordion
            multiple
            styles={{
              label: {textAlign: 'right'},
              content: {padding: 0},
            }}
          >
            {chapterList}
          </Accordion>
        </Paper>
      </Col>
      <Col span={10}>
        <Box padding={0}>
          <Box style={{padding: '2.5% 5%'}}>
            {/* {lesson.type === 'media' && (
              <Box className={classes.video}></Box>
            )} */}
            {/* {lesson.type === 'quiz' && <Quiz data={quizData} />} */}
            <Quiz quizData={quizData} QuestionsPerPage={5} />
          </Box>
          <Box style={{padding: 20}}>
            <Center mb="xl">
              <Group
                sx={t => ({
                  width: '65%',
                  backgroundColor:
                    t.colorScheme === 'light'
                      ? t.colors.blue[4]
                      : t.colors.dark[7],
                  padding: t.spacing.xl,
                  borderRadius: t.spacing.xs,
                  border: `1px solid ${
                    t.colorScheme === 'light'
                      ? t.colors.gray[2]
                      : t.colors.dark[7]
                  }`,
                })}
              >
                <Center>
                  <ActionIcon
                    variant="filled"
                    size="xl"
                    radius="xl"
                    style={{backgroundColor: 'white', color: `black`}}
                  >
                    <ChevronRightIcon />
                  </ActionIcon>
                </Center>
                <Box style={{flexGrow: 1}}>
                  <Text
                    size="xl"
                    weight={700}
                    style={{color: 'white'}}
                    align="center"
                    mb="xl"
                  >
                    عنوان الدرس اليوم هو ما هي وما هو بالتفصيل الممل
                  </Text>
                  <Center>
                    <Box>
                      <Text align="center" style={{color: 'white'}} size="sm">
                        الوقت
                      </Text>
                      <Text
                        align="center"
                        style={{color: 'white'}}
                        weight={700}
                      >
                        20 دقيقة
                      </Text>
                    </Box>
                    <Divider orientation="vertical" mx="sm"></Divider>
                    <Box>
                      <Text align="center" style={{color: 'white'}} size="sm">
                        الوقت
                      </Text>
                      <Text
                        align="center"
                        style={{color: 'white'}}
                        weight={700}
                      >
                        20 دقيقة
                      </Text>
                    </Box>
                    <Divider orientation="vertical" mx="sm"></Divider>
                    <Box>
                      <Text align="center" style={{color: 'white'}} size="sm">
                        الوقت
                      </Text>
                      <Text
                        align="center"
                        style={{color: 'white'}}
                        weight={700}
                      >
                        20 دقيقة
                      </Text>
                    </Box>
                    <Divider orientation="vertical" mx="sm"></Divider>
                    <Box>
                      <Text align="center" style={{color: 'white'}} size="sm">
                        الوقت
                      </Text>
                      <Text
                        align="center"
                        style={{color: 'white'}}
                        weight={700}
                      >
                        20 دقيقة
                      </Text>
                    </Box>
                  </Center>
                </Box>
                <Center>
                  <ActionIcon
                    variant="filled"
                    size="xl"
                    radius="xl"
                    style={{backgroundColor: 'white', color: `black`}}
                  >
                    <ChevronLeftIcon />
                  </ActionIcon>
                </Center>
              </Group>
            </Center>
            <Center mb="md">
              <RoundedContainer
                header={
                  <Text size="md" weight={700} component="span">
                    مدرسك
                  </Text>
                }
                content={
                  <Group noWrap>
                    <Avatar
                      size="lg"
                      src={null}
                      alt="no image here"
                      color="blue"
                    />
                    <Text>
                      مرحبًا ، أنا جيفري. أنا منشئ وأقضي معظم أيامي في بناء
                      الموقع والتفكير في طرق جديدة لتعليم مفاهيم محيرة. أعيش في
                      أورلاندو بولاية فلوريدا مع زوجتي وطفلي.
                    </Text>
                  </Group>
                }
              />
            </Center>
            <Center mb="md">
              <RoundedContainer
                header={
                  <Text size="md" weight={700} component="span">
                    خول هدا الدرس
                  </Text>
                }
                content={
                  <Text>
                    مرحبًا ، أنا جيفري. أنا منشئ وأقضي معظم أيامي في بناء الموقع
                    والتفكير في طرق جديدة لتعليم مفاهيم محيرة. أعيش في أورلاندو
                    بولاية فلوريدا مع زوجتي وطفلي.
                  </Text>
                }
              />
            </Center>
            <Center mb="xl">
              <RoundedContainer
                header={
                  <Text size="md" weight={700} component="span">
                    ملحقات
                  </Text>
                }
                content={
                  <Anchor href="/">
                    <Group>
                      <ActionIcon color="orange" size="xl" variant="light">
                        <DownloadIcon />
                      </ActionIcon>
                      <Text>ملخصات</Text>
                    </Group>
                  </Anchor>
                }
              />
            </Center>
            <Box mt="xl" style={{width: '50%', margin: '0 auto'}}>
              <Comments lessonId={lesson.id} currentUserId={1} />
            </Box>
          </Box>
        </Box>
      </Col>
    </Grid>
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

  if (!lessonResponse.ok && !courseResponse.ok) {
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
