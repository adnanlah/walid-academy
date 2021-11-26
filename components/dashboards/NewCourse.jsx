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
import LessonForm from './LessonForm'
import ChapterForm from './ChapterForm'
import QuizForm from './QuizForm'
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
    key: 'course-data',
    defaultValue: JSON.stringify({
      title: '',
      description: '',
      field: null,
      year: null,
      chapters: [],
      lessons: [],
    }),
  })

  const courseDataObject = JSON.parse(courseData)

  const form = useForm({
    initialValues: {
      title: courseDataObject.title,
      description: courseDataObject.description,
      field: courseDataObject.field,
    },
    validationRules: {
      title: v => v.length > 2,
      description: v => v.length > 2,
      field: v => v !== null,
    },
  })

  const [accordionState, onAccordionChange] = useState({0: true})
  const [chapterId, setChapterId] = useState('')
  const [modalOpened, setModalOpened] = useState(false)
  const [dataToBeEdited, setDataToBeEdited] = useState({})
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
      modalTitle = 'تعديل درس'
      break
    case 'newquiz':
      modalTitle = 'انشاء كويز جديد'
      break
    case 'updatechapter':
      modalTitle = 'تعديل شابتر'
    default:
      break
  }

  const [{chapters, lessons}, dispatch] = useReducer(courseReducer, {
    chapters: courseDataObject.chapters,
    lessons: courseDataObject.lessons,
  })

  useEffect(() => {
    // store data to local storage after every dispatch
    setCourseData(JSON.stringify({...form.values, chapters, lessons}))
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

  const newLessonHandler = lesson => {
    dispatch({
      type: 'newlesson',
      payload: {...lesson, type: 'media', chapterId},
    })
    setModalOpened(false)
  }

  const updateLessonHandler = lesson => {
    dispatch({type: 'updatelesson', payload: lesson})
    setModalOpened(false)
  }

  const newQuizHandler = quiz => {
    dispatch({
      type: 'newlesson',
      payload: {...quiz, type: 'quiz', chapterId},
    })
    setModalOpened(false)
  }

  const updateQuizHandler = lesson => {
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
          mb="xs"
          label="اي مجال"
          placeholder="اختر"
          required
          value={form.values.field}
          error={form.errors.field && 'Insert a field'}
          onChange={value => form.setFieldValue('field', value)}
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
                backgroundColor: theme.colors.gray[2],
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
                  <Button
                    color="teal"
                    onClick={() => {
                      setChapterId(chapter.id)
                      setModalOpened('newquiz')
                    }}
                  >
                    كويز جديد
                  </Button>
                </div>
                <Group>
                  <ActionIcon
                    onClick={() => {
                      setDataToBeEdited(chapter)
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
                        backgroundColor: theme.colors.gray[0],
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
                          {lesson.type === 'media' ? 'درس' : 'كويز'}
                          {': '}
                        </Text>
                        <Text>{lesson.title}</Text>
                      </Group>
                      <Group>
                        <ActionIcon
                          onClick={() => {
                            setDataToBeEdited(lesson)
                            setModalOpened(
                              lesson.type === 'media'
                                ? 'updatelesson'
                                : 'updatequiz',
                            )
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
            chapter={dataToBeEdited}
          />
        )}
        {modalOpened == 'newlesson' && (
          <LessonForm handler={newLessonHandler} chapterId={chapterId} />
        )}
        {modalOpened == 'updatelesson' && (
          <LessonForm handler={updateLessonHandler} lesson={dataToBeEdited} />
        )}
        {modalOpened == 'newquiz' && (
          <QuizForm handler={newQuizHandler} chapterId={chapterId} />
        )}
        {modalOpened == 'updatequiz' && (
          <QuizForm handler={updateQuizHandler} quiz={dataToBeEdited} />
        )}
      </Modal>
    </div>
  )
}

export default NewCourse
