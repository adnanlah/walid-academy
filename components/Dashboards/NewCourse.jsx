import {
  Accordion,
  Group,
  Textarea,
  Title,
  Modal,
  Text,
  ActionIcon,
  Select,
} from '@mantine/core'
import {TextInput, Button} from '@mantine/core'
import {useReducer, useState, useEffect} from 'react'
import {useLocalStorageValue, useForm} from '@mantine/hooks'
import NewLesson from './NewLesson'
import ChapterForm from './ChapterForm'
import {Cross2Icon, Pencil1Icon} from '@modulz/radix-icons'
import {nextId} from '../../util/helpers'

const courseReducer = (state, action) => {
  const {chapters, lessons} = state
  switch (action.type) {
    case 'newchapter':
      return {
        ...state,
        chapters: [...chapters, {id: nextId(chapters), ...action.payload}],
      }
    case 'updatechapter':
      return {
        ...state,
        chapters: chapters.map(chapter =>
          chapter.id === action.payload.id ? action.payload : chapter,
        ),
      }
    case 'deletechapter':
      return {
        ...state,
        lessons: lessons.filter(
          lesson => lesson.chapterId !== action.payload.id,
        ),
        chapters: chapters.filter(chapter => chapter.id !== action.payload.id),
      }
    case 'newlesson':
      return {
        ...state,
        lessons: [...lessons, {id: nextId(lessons), ...action.payload}],
      }
    case 'updatelesson':
      return {
        ...state,
        lessons: lessons.map(lesson =>
          lesson.id === action.payload.id ? action.payload : lesson,
        ),
      }
    case 'deletelesson':
      return {
        ...state,
        lessons: lessons.filter(lesson => lesson.id !== action.payload.id),
      }
  }
}

const NewCourse = ({categories}) => {
  const [courseData, setCourseData] = useLocalStorageValue({
    key: 'course-data1',
    defaultValue: JSON.stringify({
      metadata: {
        title: '',
        description: '',
        branch: null,
        grade: null,
        subject: null,
      },
      content: {chapters: [], lessons: []},
    }),
  })

  const courseDataObject = JSON.parse(courseData)

  const form = useForm({
    initialValues: {
      ...courseDataObject.metadata,
    },
    validationRules: {
      title: v => v.length > 2,
      description: v => v.length > 2,
      branch: v => v !== null,
      subject: v => v !== null,
      grade: v => v !== null,
    },
  })

  const [accordionState, onAccordionChange] = useState({0: true})
  const [chapterId, setChapterId] = useState('')
  const [modalOpened, setModalOpened] = useState(false)
  const [dataToBeUpdated, setDataToBeUpdated] = useState({})

  const [{chapters, lessons}, dispatch] = useReducer(
    courseReducer,
    courseDataObject.content,
  )

  useEffect(() => {
    // store data to local storage after every dispatch
    setCourseData(
      JSON.stringify({form: form.values, content: {chapters, lessons}}),
    )
  }, [setCourseData, form.values, chapters, lessons])

  const addNewChapterHandler = chapter => {
    dispatch({type: 'newchapter', payload: chapter})
    onAccordionChange({[chapters.length]: true}) // opens the latest accordion item only
    setModalOpened(false)
  }

  const updateChapterHandler = chapter => {
    dispatch({type: 'updatechapter', payload: chapter})
    setModalOpened(false)
  }

  const addNewLessonHandler = lesson => {
    dispatch({
      type: 'newlesson',
      payload: {...lesson, chapterId},
    })
    setModalOpened(false)
  }

  const updateLessonHandler = lesson => {
    dispatch({type: 'updatelesson', payload: lesson})
    setModalOpened(false)
  }

  const modalContent = {
    newlesson: {
      title: 'انشاء درس جديد',
      component: <NewLesson onSubmit={addNewLessonHandler} />,
    },
    updatelesson: {
      title: 'تعديل درس',
      component: (
        <NewLesson onSubmit={updateLessonHandler} lesson={dataToBeUpdated} />
      ),
    },
    newchapter: {
      title: 'انشاء شابتر جديد',
      component: <ChapterForm onSubmit={addNewChapterHandler} />,
    },
    updatechapter: {
      title: 'تعديل شابتر',
      component: (
        <ChapterForm
          onSubmit={updateChapterHandler}
          chapter={dataToBeUpdated}
        />
      ),
    },
  }

  return (
    <div>
      <Title order={4} mb="md">
        إنشاء كورس جديد
      </Title>
      <form
        onSubmit={form.onSubmit(values => {
          console.log('submitting a new course ', values)
        })}
      >
        <TextInput
          mb="xs"
          label="غنوان الكورس"
          required
          {...form.getInputProps('title')}
        />
        <Textarea
          mb="xs"
          label="نبدة عن الكورس"
          required
          {...form.getInputProps('description')}
        />
        <Group grow>
          <Select
            mb="xl"
            label="اي سنة"
            placeholder="اختر"
            required
            {...form.getInputProps('grade')}
            data={categories ? categories.grades : []}
          />
          <Select
            mb="xl"
            label="اي شعبة"
            placeholder="اختر"
            required
            {...form.getInputProps('branch')}
            data={categories ? categories.branchs : []}
          />
          <Select
            mb="xl"
            label="اي مادة"
            placeholder="اختر"
            required
            {...form.getInputProps('subject')}
            data={categories ? categories.subjects : []}
          />
        </Group>
        <Group align="end" mb="xs">
          <Button onClick={() => setModalOpened('newchapter')}>
            شابتر جديد
          </Button>
        </Group>
        <Accordion
          mb="xl"
          state={accordionState}
          onChange={onAccordionChange}
          multiple
          styles={theme => {
            return {
              item: {
                marginBottom: theme.spacing.xs,
              },
              control: {
                textAlign: 'right',
                backgroundColor:
                  theme.colorScheme === 'light'
                    ? theme.colors.gray[2]
                    : theme.colors.dark[9],
              },
            }
          }}
        >
          {chapters.map(chapter => (
            <Accordion.Item
              key={`${chapter.id}-${chapter.name}`}
              label={chapter.name}
            >
              <Group
                sx={theme => ({padding: theme.spacing.xs})}
                position="apart"
                mb="xs"
              >
                <div>
                  <Button
                    ml="xs"
                    onClick={() => {
                      setChapterId(chapter.id)
                      setModalOpened('newlesson')
                    }}
                  >
                    درس جديد
                  </Button>
                </div>
                <Group>
                  <ActionIcon
                    onClick={() => {
                      setDataToBeUpdated(chapter)
                      setModalOpened('updatechapter')
                    }}
                    ml="xs"
                    color="gray"
                  >
                    <Pencil1Icon />
                  </ActionIcon>
                  <ActionIcon
                    onClick={() => {
                      dispatch({
                        type: 'deletechapter',
                        payload: {id: chapter.id},
                      })
                    }}
                    color="red"
                  >
                    <Cross2Icon />
                  </ActionIcon>
                </Group>
              </Group>
              <div>
                {lessons
                  .filter(lesson => lesson.chapterId === chapter.id)
                  .map((lesson, lessonIdx) => (
                    <Group
                      sx={theme => ({
                        backgroundColor:
                          theme.colorScheme === 'light'
                            ? theme.colors.gray[0]
                            : theme.colors.dark[8],
                        marginBottom: theme.spacing.xs,
                        padding: theme.spacing.xs,
                        borderRadius: theme.spacing.xs,
                      })}
                      position="apart"
                      key={`${lesson.id}-${lessonIdx}-${lesson.content}`}
                    >
                      <Group>
                        <Text weight={700}>
                          {lessonIdx + 1}
                          {'. '}
                          {'درس'}
                          {': '}
                        </Text>
                        <Text>{lesson.title}</Text>
                      </Group>
                      <Group>
                        <ActionIcon
                          onClick={() => {
                            setDataToBeUpdated(lesson)
                            setModalOpened('updatelesson')
                          }}
                          ml="xs"
                          color="gray"
                        >
                          <Pencil1Icon />
                        </ActionIcon>
                        <ActionIcon
                          onClick={() => {
                            dispatch({
                              type: 'deletelesson',
                              payload: {id: lesson.id},
                            })
                          }}
                          color="red"
                        >
                          <Cross2Icon />
                        </ActionIcon>
                      </Group>
                    </Group>
                  ))}
              </div>
            </Accordion.Item>
          ))}
        </Accordion>
        <div>
          <Button type="submit">اضف</Button>
        </div>
      </form>

      <Modal
        overflow="inside"
        centered
        title={modalOpened && modalContent[modalOpened].title}
        opened={modalOpened === 'newchapter' || modalOpened === 'updatechapter'}
        onClose={() => setModalOpened(false)}
      >
        {modalOpened && modalContent[modalOpened].component}
      </Modal>

      <Modal
        styles={theme => ({
          inner: {
            padding: `3% 0`,
            alignItems: 'stretch',
          },
          modal: {
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
          },
          body: {
            flexGrow: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            '&::-webkit-scrollbar': {
              width: '6px',
              backgroundColor: 'rgba(0,0,0,0)',
            },
            '&::-webkit-scrollbar-track': {
              boxShadow: 'inset 0 0 6px rgba(0,0,0,0)',
              backgroundColor: 'F5F5F5',
              borderRadius: 15,
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: theme.colors.dark[4],
              borderRadius: 15,
            },
          },
        })}
        overflow="inside"
        centered
        title={modalOpened && modalContent[modalOpened].title}
        opened={modalOpened === 'newlesson' || modalOpened === 'updatelesson'}
        onClose={() => setModalOpened(false)}
      >
        {modalOpened && modalContent[modalOpened].component}
      </Modal>
    </div>
  )
}

export default NewCourse
