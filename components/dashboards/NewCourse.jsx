import {
  Accordion,
  Group,
  Paper,
  Textarea,
  Title,
  Modal,
  Text,
  Space,
} from '@mantine/core'
import {TextInput, Button} from '@mantine/core'
import {PlusIcon} from '@modulz/radix-icons'
import {useReducer, useState} from 'react'
import LessonForm from './LessonForm'
import ChapterForm from './ChapterForm'
import QuizForm from './QuizForm'
import {useModals} from '@mantine/modals'
const Newcourse = () => {
  const [courseName, setCourseName] = useState('')
  const [courseDescription, setCourseDescription] = useState('')
  const [state, onAccordionChange] = useState({0: true})
  const [chapterId, setChapterId] = useState('')
  const [opened, setOpened] = useState(false)
  const [dataToBeEdited, setDataToBeEdited] = useState({})

  const modals = useModals()

  const openConfirmModal = () =>
    modals.openConfirmModal({
      title: 'Please confirm your action',
      children: (
        <Text size="sm">
          This action is so important that you are required to confirm it with a
          modal. Please click one of these buttons to proceed.
        </Text>
      ),
      onCancel: () => console.log('Cancel'),
      onConfirm: () => console.log('Confirmed'),
    })

  const chaptersReducer = (state, action) => {
    switch (action.type) {
      case 'newchapter':
        return [...state, {id: state.length, ...action.payload}]
      case 'updatechapter':
        return state.map(s =>
          s.id === action.payload.id ? (s = action.payload) : s,
        )
      case 'deletechapter':
        return state.filter(s => s.id === action.id)
    }
  }

  const [chapters, chaptersDispatch] = useReducer(chaptersReducer, [])

  const lessonsReducer = (state, action) => {
    switch (action.type) {
      case 'newlesson':
        return [...state, {id: state.length, ...action.payload}]
      case 'updatelesson':
        return state.map(s =>
          s.id === action.payload.id ? (s = action.payload) : s,
        )
      case 'deletelesson':
        return state.filter(s => s.id === action.id)
    }
  }

  const [lessons, lessonsDispatch] = useReducer(lessonsReducer, [])

  const newChapterHandler = chapter => {
    chaptersDispatch({type: 'newchapter', payload: chapter})
    setOpened(false)
    onAccordionChange({[chapters.length]: true})
  }

  const updateChapterHandler = chapter => {
    chaptersDispatch({type: 'updatechapter', payload: chapter})
    setOpened(false)
  }

  const newLessonHandler = lesson => {
    lessonsDispatch({type: 'newlesson', payload: {...lesson, chapterId}})
    setOpened(false)
  }

  const updateLessonHandler = lesson => {
    lessonsDispatch({type: 'updatelesson', payload: lesson})
    setOpened(false)
  }

  const newQuizHandler = quiz => {
    quizsDispatch({type: 'newquiz', payload: {...quiz, chapterId}})
    setOpened(false)
  }

  const updateQuizHandler = quiz => {
    quizsDispatch({type: 'updatequiz', payload: quiz})
    setOpened(false)
  }

  return (
    <Paper padding="xl">
      <Title order={4} mb="md">
        إنشاء كورس جديد
      </Title>
      <TextInput
        mb="xs"
        label="غنوان الكورس"
        onChange={event => setCourseName(event.target.value)}
      />

      <Textarea
        mb="xs"
        label="نبدة عن الكورس"
        onChange={event => setCourseDescription(event.target.value)}
      />

      <Group align="end" mb="xs">
        <Button onClick={() => setOpened('newchapter')}>شابتر جديد</Button>
      </Group>

      <Accordion
        state={state}
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
        {chapters.map(c => (
          <Accordion.Item key={`${c.id}-${c.name}`} label={c.name}>
            <Group position="apart" my="xs">
              <div>
                <Button
                  ml="xs"
                  onClick={() => {
                    setOpened('newlesson')
                    setChapterId(c.id)
                  }}
                >
                  درس جديد
                </Button>
                <Button
                  color="teal"
                  onClick={() => {
                    setOpened('newquiz')
                    setChapterId(c.id)
                  }}
                >
                  كويز جديد
                </Button>
              </div>
              <div>
                <Button ml="xs" color="dark">
                  تعديل
                </Button>
                <Button color="red">حدف</Button>
              </div>
            </Group>
            <div>
              {lessons
                .filter(l => l.chapterId === c.id)
                .map(l => (
                  <Group
                    sx={t => ({
                      cursor: 'pointer',
                      backgroundColor: t.colors.gray[0],
                      marginBottom: 15,
                    })}
                    position="apart"
                    key={`${l.id}`}
                    onClick={() => {
                      setDataToBeEdited(l)
                      setOpened('updatelesson')
                    }}
                  >
                    <Group>
                      <Text weight={700}>درس رقم {l.id}</Text>
                      <Space w="xs" />
                      <Text>{l.title}</Text>
                    </Group>
                    <div>
                      <Button ml="xs" color="dark">
                        تعديل
                      </Button>
                      <Button color="red">حدف</Button>
                    </div>
                  </Group>
                ))}
            </div>
          </Accordion.Item>
        ))}
      </Accordion>

      <Modal opened={opened == 'newchapter'} onClose={() => setOpened(false)}>
        <ChapterForm handler={newChapterHandler} />
      </Modal>

      <Modal
        opened={opened == 'updatechapter'}
        onClose={() => setOpened(false)}
      >
        <ChapterForm handler={updateChapterHandler} />
      </Modal>

      <Modal opened={opened == 'newlesson'} onClose={() => setOpened(false)}>
        <LessonForm handler={newLessonHandler} chapterId={chapterId} />
      </Modal>

      <Modal opened={opened == 'updatelesson'} onClose={() => setOpened(false)}>
        <LessonForm handler={updateLessonHandler} lesson={dataToBeEdited} />
      </Modal>

      <Modal
        styles={{
          modal: {
            width: '50%',
          },
          title: {fontWeight: 700},
        }}
        title="الكويز جديد"
        opened={opened == 'newquiz'}
        onClose={() => setOpened(false)}
      >
        <QuizForm handler={newQuizHandler} chapterId={chapterId} />
      </Modal>

      <Modal opened={opened == 'updatequiz'} onClose={() => setOpened(false)}>
        <QuizForm handler={updateQuizHandler} quiz={dataToBeEdited} />
      </Modal>
    </Paper>
  )
}

export default Newcourse
