import {
  Button,
  Anchor,
  ActionIcon,
  Modal,
  Title,
  Text,
  Center,
  Grid,
  Col,
  Paper,
  Box,
  Divider,
  Group,
} from '@mantine/core'
import {
  PlayIcon,
  DownloadIcon,
  AvatarIcon,
  ChatBubbleIcon,
  CubeIcon,
  VideoIcon,
  FileIcon,
  GlobeIcon,
  TimerIcon,
} from '@modulz/radix-icons'
import Layout from '../../../components/Layout'
import ContentLayout from '../../../components/ContentLayout'
import MyContainer from '../../../components/MyContainer'
import VideoModal from '../../../components/VideoModal'
import RatingStars from '../../../components/RatingStars'
import MyBreadcrumbs from '../../../components/MyBreadcrumbs'
import {useState} from 'react'
import Link from 'next/link'

function LessonItem(props) {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={props.content}
        overlayOpacity={0.85}
        styles={{
          modal: {
            height: '100%',
            width: '85%',
            display: 'flex',
            flexDirection: 'column',
          },
          body: {flexGrow: 1},
        }}
      >
        <VideoModal url={'null'} />
      </Modal>

      <Group
        position="apart"
        onClick={() => {
          if (props.url) setOpened(true)
        }}
        {...props}
      >
        <Center inline>
          <ActionIcon
            size="md"
            variant="outline"
            ml="xs"
            style={{transform: 'scale(-1,1)'}}
          >
            {props.icon}
          </ActionIcon>
          <span>{props.content}</span>
        </Center>
        <Text color="dimmed">
          <span>{props.length}</span>
          <span> د</span>
        </Text>
      </Group>
    </>
  )
}

function AttachItem(props) {
  return (
    <>
      <Anchor
        href={props.url}
        sx={theme => ({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: 'inherit',
        })}
        {...props}
      >
        <Center inline>
          <ActionIcon
            size="md"
            variant="outline"
            ml="xs"
            style={{transform: 'scale(-1,1)'}}
          >
            {props.icon}
          </ActionIcon>
          <span>{props.content}</span>
        </Center>
        <Text color="dimmed">
          <span>{(props.size / 1024).toFixed(1)}</span>
          <span> مغ</span>
        </Text>
      </Anchor>
    </>
  )
}

export default function Course({course}) {
  const chaptersList = course.contentheme.map((chapter, idx) => {
    if (chapter.type === 'quiz') {
      return (
        <Paper
          key={`quiz-${idx}`}
          component="article"
          shadow="xs"
          radius="xs"
          mb="md"
          sx={theme => ({
            padding: `${theme.spacing.lg}px ${theme.spacing.md}px`,
          })}
        >
          <Title order={4} mb="md">
            {chapter.title}
          </Title>
          <Text mb="md">{chapter.description}</Text>
          <Button>ابدأ</Button>
        </Paper>
      )
    }

    const lessonsList = chapter.lessonsListheme.map((lesson, idx) => {
      return (
        <LessonItem
          key={idx}
          icon={<PlayIcon />}
          content={lesson.title}
          url={lesson.url}
          length={lesson.length}
          mb={chapter.lessonsListheme.length === idx + 1 ? null : 'xs'}
        />
      )
    })

    let attachmentsList
    let attach

    if (chapter.attachmentsList) {
      attachmentsList = chapter.attachmentsListheme.map((attach, idx) => {
        return (
          <AttachItem
            key={idx}
            icon={<DownloadIcon />}
            content={attach.name}
            url={attach.url}
            size={attach.size}
            mb={chapter.attachmentsListheme.length === idx + 1 ? null : 'xs'}
          />
        )
      })

      attach = (
        <div>
          <Title order={6} mb="xs" mr="xs">
            ملحقات
          </Title>
          <Box
            sx={theme => ({
              padding: theme.spacing.xs,
              borderTop: `2px solid ${
                theme.colorScheme === 'light'
                  ? theme.colors.blue[5]
                  : theme.colors.blue[9]
              }`,
              backgroundColor:
                theme.colorScheme === 'light'
                  ? theme.colors.gray[0]
                  : theme.colors.dark[9],
            })}
          >
            {attachmentsList}
          </Box>
        </div>
      )
    }

    const lessons = (
      <div>
        <Title order={6} mb="xs" mr="xs">
          فيديوهات
        </Title>
        <Box
          sx={theme => ({
            padding: theme.spacing.xs,
            marginBottom: theme.spacing.xs,
          })}
        >
          {lessonsList}
        </Box>
      </div>
    )

    return (
      <Paper
        key={idx}
        component="article"
        shadow="xs"
        radius="xs"
        mb="md"
        sx={theme => ({
          padding: `${theme.spacing.lg}px ${theme.spacing.xs}px`,
        })}
      >
        <Title order={4} mb="md" mr="xs">
          {chapter.title}
        </Title>
        <div>
          {chapter.lessonsList && lessons}
          {chapter.attachmentsList && attach}
        </div>
      </Paper>
    )
  })

  const reviewsList = course.reviews.map((review, idx) => {
    return (
      <div key={idx}>
        <Paper mb="xl">
          <Box>
            <Box mb="xs">{review.user}</Box>
            <Box mb="xs">
              <RatingStars rating={review.rating} />
            </Box>
          </Box>
          <Text>{review.text}</Text>
        </Paper>
        {course.reviews.length !== idx + 1 && <Divider mb="xl" />}
      </div>
    )
  })

  const ReviewElement = props => {
    return (
      <Box>
        <Center inline {...props}>
          {props.icon}
          <Box mr="xs">{props.children}</Box>
        </Center>
      </Box>
    )
  }

  return (
    <>
      <Box
        component="section"
        sx={theme => ({
          backgroundColor:
            theme.colorScheme === 'light'
              ? theme.colors.blue[9]
              : theme.colors.dark[9],
          padding: `${theme.spacing.xl}px 0`,
          marginBottom: theme.spacing.md,
          boxShadow: theme.shadows.md,
        })}
      >
        <MyContainer>
          <Box mb="xs">
            <MyBreadcrumbs links={course.categories} />
          </Box>
          <Title order={2}>{course.title}</Title>
        </MyContainer>
      </Box>

      <section>
        <MyContainer>
          <Grid columns={12}>
            <Col span={8}>
              <div>{chaptersList}</div>
              <Paper padding="md" mb="md">
                <Title order={4} mb="md">
                  التقييمات
                </Title>
                {reviewsList}
              </Paper>
            </Col>
            <Col span={4}>
              <Paper component="aside" padding={0} radius="xs" shadow="xs">
                <Box style={{height: '300px', backgroundColor: '#000'}}></Box>
                <Paper padding="md">
                  <ReviewElement icon={<AvatarIcon />} mb="xs">
                    <Text component="span" ml="xs">
                      من تقديم الاستاد
                    </Text>
                    <Text component="span">
                      <Link href="/users/1" passHref>
                        <Anchor component="a" href="/users/1">
                          {course.user.name}
                        </Anchor>
                      </Link>
                    </Text>
                  </ReviewElement>

                  <ReviewElement icon={<ChatBubbleIcon />} mb="xs">
                    <Center inline>
                      <Text ml="xs"> التقييم: </Text>
                      <RatingStars rating={course.rating} />
                    </Center>
                  </ReviewElement>

                  <ReviewElement icon={<GlobeIcon />} mb="sm">
                    <Text>اللغة الانجليزية</Text>
                  </ReviewElement>

                  <Box mb="sm">
                    <Text weight={700}>يحتوي الدرس على</Text>
                  </Box>

                  <ReviewElement icon={<VideoIcon />} mb="xs">
                    <Text>3 سا و15د</Text>
                  </ReviewElement>

                  <ReviewElement icon={<FileIcon />} mb="xs">
                    <Text>5 ملقات</Text>
                  </ReviewElement>

                  <ReviewElement icon={<CubeIcon />} mb="md">
                    <Text>5 تمارين</Text>
                  </ReviewElement>

                  <ReviewElement icon={<TimerIcon />} mb="md">
                    <Text>اخر تحديث: 3 نوفمبر 2021</Text>
                  </ReviewElement>

                  <Button mb="xs" fullWidth={true} color="primary" radius="xs">
                    أشتراك شهري
                  </Button>

                  <Button
                    fullWidth={true}
                    variant="outline"
                    color="dark"
                    radius="xs"
                  >
                    <Center>
                      <div>نافش الدرس في المنتدى</div>
                      <ChatBubbleIcon
                        style={{width: 20, height: 20, marginRight: 12.5}}
                      />
                    </Center>
                  </Button>
                </Paper>
              </Paper>
            </Col>
          </Grid>
        </MyContainer>
      </section>

      <section>
        <Paper
          sx={theme => ({
            boxShadow: `0 -1px 3px rgb(0 0 0 / 5%)`,
            padding: theme.spacing.xl * 2,
            textAlign: 'center',
          })}
        >
          <Anchor href={course.forumPostLink}>
            <Center>
              <Text>نافش الدرس في المنتدى</Text>
              <ChatBubbleIcon
                style={{width: 25, height: 25, marginRight: 12.5}}
              />
            </Center>
          </Anchor>
        </Paper>
      </section>
    </>
  )
}

Course.getLayout = function getLayout(page) {
  return (
    <Layout>
      <ContentLayout>{page}</ContentLayout>
    </Layout>
  )
}

export async function getStaticPaths() {
  const response = await fetch(`https://my.backend/courses`)

  if (!response.ok) {
    return {
      notFound: true,
    }
  }

  const data = await response.json()

  const paths = data.map(c => ({params: {id: c.id}}))

  return {
    paths: [],
    fallback: 'blocking',
  }
}

export async function getStaticProps({params}) {
  const response = await fetch(`https://my.backend/courses/${params.slug}`)

  if (!response.ok) {
    return {
      notFound: true,
    }
  }

  const data = await response.json()

  return {
    props: {
      course: data,
    },
  }
}
