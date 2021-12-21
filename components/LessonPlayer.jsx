import {Accordion, Anchor, Box, Group, ScrollArea, Text} from '@mantine/core'
import {useState} from 'react'

const LessonItem = ({children, href, currentLesson, ...props}) => {
  return (
    <Anchor href={href} variant="text" {...props}>
      <Group
        noWrap
        align="start"
        sx={theme => ({
          backgroundColor: currentLesson ? theme.colors.indigo : undefined,

          width: '100%',
          margin: 0,
          padding: theme.spacing.xs,
          '&:hover': {
            cursor: 'pointer',
            backgroundColor: currentLesson
              ? undefined
              : theme.colorScheme === 'light'
              ? theme.colors.indigo[1]
              : theme.colors.dark[6],
          },
          '& *': {
            color:
              currentLesson && theme.colorScheme === 'light'
                ? 'white !important'
                : undefined,
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

const Lessonplayer = ({lesson, course}) => {
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
        {c.lessons.map((lessonItem, idx) => {
          return (
            <LessonItem
              currentLesson={parseInt(lesson.id) === parseInt(lessonItem.id)}
              key={lessonItem.id}
              href={`${lessonItem.id}`}
            >
              <LessonItem.Number>
                <Text>{idx + 1}</Text>
              </LessonItem.Number>
              <LessonItem.Content>
                <Text size="sm" mb="xs" weight={500}>
                  {lessonItem.title}
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
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: '75%',
          height: 700,
          backgroundColor: `black`,
        }}
      ></div>
      <div
        style={{
          width: '25%',
        }}
      >
        <Box
          sx={theme => ({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            height: '100%',
            backgroundColor:
              theme.colorScheme === 'light'
                ? theme.colors.gray[2]
                : theme.colors.dark[7],
            boxSizing: 'border-box',
          })}
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
            style={{
              position: 'relative',
              flexGrow: 20,
            }}
          >
            <ScrollArea
              type="always"
              offsetScrollbars
              scrollbarSize={8}
              dir="rtl"
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                height: '100%',
              }}
            >
              <Accordion
                state={accordionState}
                onChange={onAccordionChange}
                multiple
                styles={{
                  content: {padding: 0},
                }}
              >
                {courseNavigation}
              </Accordion>
            </ScrollArea>
          </Box>
        </Box>
      </div>
    </div>
  )
}

export default Lessonplayer
