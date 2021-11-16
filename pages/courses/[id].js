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
  createStyles,
  Divider,
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
} from '@modulz/radix-icons'
import Layout from '../../components/Layout'
import ContentLayout from '../../components/ContentLayout'
import Container from '../../components/ِContainer'
import VideoModal from '../../components/VideoModal'
import RatingStars from '../../components/RatingStars'
import MyBreadcrumbs from '../../components/MyBreadcrumbs'
import {useState} from 'react'

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

      <Box
        sx={t => ({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        })}
        onClick={() => {
          if (props.videoItem && props.url) setOpened(true)
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
      </Box>
    </>
  )
}

function AttachItem(props) {
  return (
    <>
      <Anchor
        href={props.url}
        sx={t => ({
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
  const chaptersList = course.content.map((chapter, idx) => {
    const lessonsList = chapter.lessonsList.map((lesson, idx) => {
      return (
        <LessonItem
          key={idx}
          icon={<PlayIcon />}
          content={lesson.title}
          url={lesson.url}
          videoItem={true}
          length={lesson.length}
          mb={chapter.lessonsList.length === idx + 1 ? null : 'xs'}
        />
      )
    })

    let attachmentsList
    let attach

    if (chapter.attachmentsList) {
      attachmentsList = chapter.attachmentsList.map((attach, idx) => {
        return (
          <AttachItem
            key={idx}
            icon={<DownloadIcon />}
            content={attach.name}
            url={attach.url}
            size={attach.size}
            mb={chapter.attachmentsList.length === idx + 1 ? null : 'xs'}
          />
        )
      })

      attach = (
        <div>
          <Title order={6} mb="xs" mr="xs">
            ملحقات
          </Title>
          <Box
            sx={t => ({
              padding: t.spacing.xs,
              borderTop: `2px solid ${
                t.colorScheme === 'light' ? t.colors.blue[5] : t.colors.blue[9]
              }`,
              backgroundColor:
                t.colorScheme === 'light' ? t.colors.gray[0] : t.colors.dark[9],
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
          sx={t => ({
            padding: t.spacing.xs,
            marginBottom: t.spacing.xs,
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
      <Center inline>
        {props.icon}
        <Box mr="xs">{props.children}</Box>
      </Center>
    )
  }

  return (
    <>
      <Paper
        component="section"
        sx={t => ({
          backgroundColor:
            t.colorScheme === 'light' ? t.colors.blue[9] : t.colors.dark[9],
          padding: `${t.spacing.xl}px 0`,
          marginBottom: t.spacing.md,
          boxShadow: t.shadows.md,
        })}
      >
        <Container>
          <Box mb="xs">
            <MyBreadcrumbs items={course.categories} />
          </Box>
          <Title order={2}>{course.title}</Title>
        </Container>
      </Paper>

      <section>
        <Container>
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
                  <Box mb="xs">
                    <ReviewElement icon={<AvatarIcon />}>
                      <Text>من تقديم الاستاد محمد علي</Text>
                    </ReviewElement>
                  </Box>

                  <Box mb="sm">
                    <ReviewElement icon={<ChatBubbleIcon />}>
                      <Text>
                        التقييم: <RatingStars rating={course.rating} />
                      </Text>
                    </ReviewElement>
                  </Box>

                  <Box mb="xs">
                    <ReviewElement icon={<GlobeIcon />}>
                      <Text>اللغة الانجليزية</Text>
                    </ReviewElement>
                  </Box>

                  <Box mb="sm">
                    <Text weight={700}>يحتوي الدرس على</Text>
                  </Box>

                  <Box mb="xs">
                    <ReviewElement icon={<VideoIcon />}>
                      <Text>3 سا و15د</Text>
                    </ReviewElement>
                  </Box>

                  <Box mb="xs">
                    <ReviewElement icon={<FileIcon />}>
                      <Text>5 ملقات</Text>
                    </ReviewElement>
                  </Box>

                  <Box mb="xs">
                    <ReviewElement icon={<CubeIcon />}>
                      <Text>5 تمارين</Text>
                    </ReviewElement>
                  </Box>

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
        </Container>
      </section>

      <section>
        <Paper
          sx={t => ({
            boxShadow: `0 -1px 3px rgb(0 0 0 / 5%)`,
            padding: t.spacing.xl * 2,
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
  const response = await fetch(`https://my.backend/courses/${params.id}`)

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
