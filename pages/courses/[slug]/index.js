import {
  Button,
  Anchor,
  ActionIcon,
  Title,
  Text,
  Center,
  Grid,
  Col,
  Paper,
  Box,
  Group,
} from '@mantine/core'
import {
  PlayIcon,
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
import RatingStars from '../../../components/RatingStars'
import MyBreadcrumbs from '../../../components/MyBreadcrumbs'
import Link from 'next/link'
import {arabicDict} from '../../../util/academicDict'

function ChapterItem({icon, title, measure, ...props}) {
  return (
    <Box
      sx={theme => ({
        padding: theme.spacing.xs,
        '&:hover': {backgroundColor: theme.colors.gray[1]},
      })}
      {...props}
    >
      <Anchor href={`/lessons/1`} variant="text" {...props}>
        <Group position="apart">
          <Center inline>
            <ActionIcon
              size="md"
              variant="outline"
              ml="xs"
              style={{transform: 'scale(-1,1)'}}
            >
              {icon}
            </ActionIcon>
            <span>{title}</span>
          </Center>
          <Text color="dimmed">
            <span>{measure}</span>
          </Text>
        </Group>
      </Anchor>
    </Box>
  )
}

const InfoCardItem = ({icon, children, ...props}) => {
  return (
    <Box {...props}>
      <Center inline>
        {icon}
        <Box mr="xs">{children}</Box>
      </Center>
    </Box>
  )
}

export default function Course({course}) {
  const chaptersList = course.content.map((chapter, idx) => {
    const lessonsWrapper = (
      <div>
        <Box>
          {chapter.lessons.map(lesson => {
            if (lesson.type === 'media')
              return (
                <ChapterItem
                  key={lesson.id}
                  icon={<PlayIcon />}
                  title={lesson.title}
                  url={lesson.url}
                  measure={lesson.length + ' د'}
                />
              )
            else if (lesson.type === 'quiz')
              return (
                <ChapterItem
                  key={lesson.id}
                  icon={<CubeIcon />}
                  title={lesson.title}
                  url={lesson.url}
                />
              )
          })}
        </Box>
      </div>
    )

    return (
      <Paper
        key={idx}
        component="article"
        mb="md"
        radius="xs"
        sx={theme => ({
          padding: `${theme.spacing.lg}px ${theme.spacing.xs}px`,
        })}
      >
        <Title order={4} mb="xs" mr="xs">
          {chapter.title}
        </Title>
        <div>{chapter.lessons && lessonsWrapper}</div>
      </Paper>
    )
  })

  return (
    <>
      <Box
        component="section"
        sx={theme => ({
          backgroundColor:
            theme.colorScheme === 'light'
              ? theme.colors.blue[9]
              : theme.colors.dark[9],
          padding: `${theme.spacing.xl * 2}px 0`,
          marginBottom: theme.spacing.md,
        })}
      >
        <MyContainer>
          <div>
            <Box mb="xs">
              <MyBreadcrumbs
                links={[
                  {title: arabicDict(course.grade), href: '#'},
                  {title: arabicDict(course.branch), href: '#'},
                  {title: arabicDict(course.subject), href: '#'},
                ]}
              />
            </Box>
            <Title order={2}>{course.title}</Title>
          </div>
        </MyContainer>
      </Box>

      <MyContainer>
        <Grid columns={12}>
          <Col span={8}>
            <section>{chaptersList}</section>
            <section>
              <Paper padding="md" mb="md">
                {/* <Reviews courseId={1} /> */}
              </Paper>
            </section>
          </Col>
          <Col span={4}>
            <aside>
              <Box style={{height: '300px', backgroundColor: '#000'}}>
                {/* Black box as a thumbnail */}
              </Box>
              <Paper padding="md">
                <InfoCardItem icon={<AvatarIcon />} mb="xs">
                  <Text component="span" ml="xs">
                    من تقديم الاستاد
                  </Text>
                  <Link href="/users/1" passHref component="span">
                    <Anchor component="a" href="/users/1">
                      {course.user.name}
                    </Anchor>
                  </Link>
                </InfoCardItem>

                <InfoCardItem icon={<ChatBubbleIcon />} mb="xs">
                  <Center inline>
                    <Text ml="xs"> التقييم: </Text>
                    <RatingStars rating={course.rating} />
                  </Center>
                </InfoCardItem>

                <InfoCardItem icon={<GlobeIcon />} mb="md">
                  <Text>اللغة الانجليزية</Text>
                </InfoCardItem>

                <Box mb="sm">
                  <Text weight={700}>يحتوي الدرس على</Text>
                </Box>

                <InfoCardItem icon={<VideoIcon />} mb="xs">
                  <Text>3 سا و15د</Text>
                </InfoCardItem>

                <InfoCardItem icon={<FileIcon />} mb="xs">
                  <Text>5 ملقات</Text>
                </InfoCardItem>

                <InfoCardItem icon={<CubeIcon />} mb="md">
                  <Text>5 تمارين</Text>
                </InfoCardItem>

                <InfoCardItem icon={<TimerIcon />} mb="md">
                  <Text>اخر تحديث: 3 نوفمبر 2021</Text>
                </InfoCardItem>

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
            </aside>
          </Col>
        </Grid>
      </MyContainer>

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

  const paths = data.map(c => ({params: {slug: `${c.id}`}}))

  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({params}) {
  const response = await fetch(`https://my.backend/courses/${params.slug}/full`)

  if (!response.ok) {
    // redirect to 404 page
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
