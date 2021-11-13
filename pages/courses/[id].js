import {Title, Center, Box, createStyles} from '@mantine/core'
import {PlayIcon} from '@modulz/radix-icons'
import Layout from '../../components/Layout'
import Container from '../../components/ِContainer'

const useStyles = createStyles(theme => {
  return {
    titleWrapper: {
      background: theme.colors.dark[4],
      color: 'white',
      padding: `${theme.spacing.xl}px ${theme.spacing.md}px`,
    },
    contentWrapper: {
      padding: `${theme.spacing.md}px 0`,
    },
    chapterWrapper: {
      padding: `${theme.spacing.md}px`,
    },
  }
})

function LessonItem(props) {
  return (
    <Center inline>
      <Center
        sx={theme => ({
          marginLeft: theme.spacing.xs,
          border: `1px solid ${theme.colors.gray[4]}`,
          padding: theme.spacing.xs,
          transform: `scale(-1,1)`,
        })}
      >
        {props.icon}
      </Center>

      <span>{props.content}</span>
    </Center>
  )
}

export default function Course({course}) {
  const {classes} = useStyles()

  return (
    <div>
      <section className={classes.titleWrapper}>
        <Container>
          <Title order={4}>{course.category}</Title>
          <Title order={2}>{course.title}</Title>
        </Container>
      </section>

      <Container>
        <section className={classes.contentWrapper}>
          <div className={classes.chapterWrapper}>
            <h3>عنوان الفصل</h3>
            <div className="lessons">
              <LessonItem icon={<PlayIcon />} content="الدرس الاول والثاني " />
            </div>
          </div>
        </section>
      </Container>
    </div>
  )
}

Course.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
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
