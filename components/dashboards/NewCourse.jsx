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

const nextId = array =>
  array[array.length - 1] ? array[array.length - 1].id + 1 : 0

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

const NewCourse = () => {
  const [courseData, setCourseData] = useLocalStorageValue({
    key: 'course-data1',
    defaultValue: JSON.stringify({
      form: {
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
      ...courseDataObject.form,
    },
    validationRules: {
      title: v => v.length > 2,
      description: v => v.length > 2,
      branch: v => v !== null,
    },
  })

  const [accordionState, onAccordionChange] = useState({0: true})
  const [chapterId, setChapterId] = useState('')
  const [modalOpened, setModalOpened] = useState(false)
  const [dataToBeUpdated, setDataToBeUpdated] = useState({})
  const modalTitle = ''

  switch (modalOpened) {
    case 'newlesson':
      modalTitle = 'انشاء درس جديد'
      break
    case 'updatelesson':
      modalTitle = 'تعديل درس'
      break
    case 'newchapter':
      modalTitle = 'انشاء شابتر جديد'
      break
    case 'updatechapter':
      modalTitle = 'تعديل شابتر'
      break
    default:
      break
  }

  const [{chapters, lessons}, dispatch] = useReducer(
    courseReducer,
    courseDataObject.content,
  )

  useEffect(() => {
    // store data to local storage after every dispatch
    setCourseData(
      JSON.stringify({from: form.values, content: {chapters, lessons}}),
    )
  }, [setCourseData, form.values, chapters, lessons])

  const newChapterHandler = chapter => {
    dispatch({type: 'newchapter', payload: chapter})
    onAccordionChange({[chapters.length]: true}) // opens the latest accordion item only
    setModalOpened(false)
  }

  const updateChapterHandler = chapter => {
    dispatch({type: 'updatechapter', payload: chapter})
    setModalOpened(false)
  }

  const addLessonHandler = lesson => {
    console.log('dispatching the new lesson', lesson)
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
          value={form.values.title}
          error={form.errors.title && 'Insert a title'}
          onChange={event =>
            form.setFieldValue('title', event.currentTarget.value)
          }
        />
        <Textarea
          mb="xs"
          label="نبدة عن الكورس"
          required
          value={form.values.description}
          error={form.errors.description && 'Insert a description'}
          onChange={event =>
            form.setFieldValue('description', event.currentTarget.value)
          }
        />
        <Select
          mb="xl"
          label="اي مجال"
          placeholder="اختر"
          required
          value={form.values.branch}
          error={form.errors.branch && 'Insert a branch'}
          onChange={value => form.setFieldValue('branch', value)}
          data={[
            {value: 'maths', label: 'رياضيات'},
            {value: 'physics', label: 'فيزياء'},
            {value: 'biology', label: 'علوم'},
            {value: 'french', label: 'فرنسية'},
          ]}
        />
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
        <Group position="right">
          <Button type="reset" color="red">
            إعادة
          </Button>
          <Button type="submit">اضف</Button>
        </Group>
      </form>

      <Modal
        styles={{
          modal: {
            width: '50%',
          },
        }}
        overflow="inside"
        centered
        title={modalTitle}
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
      >
        {modalOpened == 'newchapter' && (
          <ChapterForm handler={newChapterHandler} />
        )}
        {modalOpened == 'updatechapter' && (
          <ChapterForm
            handler={updateChapterHandler}
            chapter={dataToBeUpdated}
          />
        )}
        {modalOpened == 'newlesson' && (
          <NewLesson addLessonHandler={addLessonHandler} />
        )}
        {modalOpened == 'updatelesson' && (
          <NewLesson handler={updateLessonHandler} lesson={dataToBeUpdated} />
        )}
      </Modal>
    </div>
  )
}

export default NewCourse
