import {Accordion, Anchor, Box, Group, Text} from '@mantine/core'
import Quiz from './quiz/Quiz'
import {useState} from 'react'

const LessonItem = ({children, href, currentLesson, ...props}) => {
  return (
    <Anchor href={href} variant="text" {...props}>
      <Group
        noWrap
        align="start"
        sx={theme => ({
          backgroundColor: currentLesson ? theme.colors.indigo : null,

          width: '100%',
          margin: 0,
          padding: theme.spacing.xs,
          '&:hover': {
            cursor: 'pointer',
            backgroundColor: currentLesson
              ? null
              : theme.colorScheme === 'light'
              ? theme.colors.indigo[1]
              : theme.colors.dark[6],
          },
          '& *': {
            color:
              currentLesson && theme.colorScheme === 'light'
                ? 'white !important'
                : null,
          },
        })}
      >
        {children}
      </Group>
    </Anchor>
  )
}
LessonItem.Number = function LessonItemNumber({children, ...restProps}) {
  return <div {...restProps}>{children}</div>
}
LessonItem.Content = function LessonItemContent({children, ...restProps}) {
  return (
    <div style={{flexGrow: 1}} {...restProps}>
      {children}
    </div>
  )
}

const Lessonplayer = ({lesson, lessonId, course}) => {
  const [accordionState, onAccordionChange] = useState(() => {
    const obj = {}
    course.content.forEach((c, idx) => {
      obj[idx] = true
    })
    return obj
  })

  const courseNavigation = course.content.map(c => {
    return (
      <Accordion.Item key={c.id} label={c.title}>
        {c.lessons.map((lesson, idx) => {
          return (
            <LessonItem
              currentLesson={parseInt(lessonId) === parseInt(lesson.id)}
              key={lesson.id}
              href={`${lesson.id}`}
            >
              <LessonItem.Number>
                <Text>{idx}</Text>
              </LessonItem.Number>
              <LessonItem.Content>
                <Text size="sm" mb="xs" weight={500}>
                  {lesson.title}
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

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'stretch',
        width: '100%',
        height: '700px',
      }}
    >
      <Box
        style={{
          width: '75%',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: `black`,
          }}
        >
          BLACK BOX
        </div>
      </Box>
      <Box
        sx={theme => ({
          backgroundColor:
            theme.colorScheme === 'light'
              ? theme.colors.gray[2]
              : theme.colors.dark[7],
          width: '25%',
        })}
      >
        <div
          style={{
            height: '100%',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={theme => ({
              padding: `${theme.spacing.xl}px ${theme.spacing.xl}px`,
              boxShadow: theme.shadows.xs,
            })}
          >
            <Text weight={500} size="sm" color="dimmed">
              الكورس
            </Text>
            <Text weight={500} size="lg">
              {course.title}
            </Text>
          </Box>
          <Box
            sx={theme => ({
              '&::-webkit-scrollbar-track': {
                boxShadow: 'inset 0 0 6px rgba(0,0,0,0)',
                backgroundColor: 'F5F5F5',
              },
              '&::-webkit-scrollbar': {
                width: '6px',
                backgroundColor: 'rgba(0,0,0,0)',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: theme.colors.dark[4],
              },
              flexGrow: 2,
              overflowY: 'scroll',
              boxSizing: 'border-box',
            })}
          >
            <Accordion
              state={accordionState}
              onChange={onAccordionChange}
              multiple
              styles={{
                label: {textAlign: 'right'},
                content: {padding: 0},
              }}
            >
              {courseNavigation}
            </Accordion>
          </Box>
        </div>
      </Box>
    </div>
  )
}

export default Lessonplayer
