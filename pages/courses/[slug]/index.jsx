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
import Layout from 'layouts/Layout'
import BgLayout from 'layouts/BgLayout'
import MyContainer from 'components/MyContainer'
import StarRatingDisplay from 'components/StarRatingDisplay'
import MyBreadcrumbs from 'components/MyBreadcrumbs'
import Reviews from 'components/Reviews'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {arabicDict} from 'util/academicDict'

export default function Course({course}) {
  const chaptersList = course.content.map((chapter, idx) => {
    const lessonsWrapper = (
      <Box>
        {chapter.lessons.map(lesson => {
          return (
            <LessonItem
              key={lesson.id}
              icon={<PlayIcon />}
              lesson={lesson}
              measure={lesson.length + ' د'}
            />
          )
        })}
      </Box>
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
        <div>{lessonsWrapper}</div>
      </Paper>
    )
  })

  return (
    <>
      <Box
        component="header"
        sx={theme => ({
          backgroundColor:
            theme.colorScheme === 'light'
              ? theme.colors.blue[9]
              : theme.colors.dark[9],
          padding: `${theme.spacing.xl * 2}px 0`,
        })}
      >
        <MyContainer>
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
        </MyContainer>
      </Box>

      <MyContainer py="xl">
        <Grid columns={12}>
          <Col component="main" span={8}>
            <section>{chaptersList}</section>
            <section>
              <Paper padding="md">
                <Reviews courseId={1} />
              </Paper>
            </section>
          </Col>
          <Col component="aside" span={4}>
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
                  <StarRatingDisplay rating={course.rating} />
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
          </Col>
        </Grid>
      </MyContainer>

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
    </>
  )
}

function LessonItem({icon, lesson, measure, ...restProps}) {
  const router = useRouter()
  const {id, title} = lesson

  return (
    <Box
      sx={theme => ({
        padding: theme.spacing.xs,
        '&:hover': {backgroundColor: theme.colors.gray[1]},
      })}
      {...restProps}
    >
      <Link href={router.asPath + `/lessons/${id}`} passHref>
        <Anchor variant="text">
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
      </Link>
    </Box>
  )
}

const InfoCardItem = ({icon, children, ...restProps}) => {
  return (
    <Box {...restProps}>
      <Center inline>
        {icon}
        <Box mr="xs">{children}</Box>
      </Center>
    </Box>
  )
}

Course.getLayout = function getLayout(page) {
  return (
    <Layout>
      <BgLayout>{page}</BgLayout>
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
