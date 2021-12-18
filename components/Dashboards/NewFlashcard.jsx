import {
  ActionIcon,
  Button,
  Col,
  Grid,
  Group,
  Modal,
  Select,
  Text,
  Textarea,
  TextInput,
  Title,
  Pagination,
  Center,
  Box,
} from '@mantine/core'
import {useForm, useLocalStorageValue} from '@mantine/hooks'
import {Cross2Icon, PlusIcon} from '@modulz/radix-icons'
import {useReducer, useState, useEffect} from 'react'
import FlashcardForm from './FlashcardForm'
import {nextId} from '../../util/helpers'

const flashcardsReducer = (state, action) => {
  switch (action.type) {
    case 'newflashcard':
      return [...state, {id: nextId(state), ...action.payload}]
    case 'updateflashcard':
      return state.map(flashcard =>
        flashcard.id === action.payload.id ? action.payload : flashcard,
      )
    case 'removeflashcard':
      return state.filter(fc => fc.id !== action.payload.id)
  }
}

const Newflashcard = ({categories}) => {
  const [flashcardData, setFlashcardData] = useLocalStorageValue({
    key: 'flashcard-data',
    defaultValue: JSON.stringify({
      form: {
        title: '',
        description: '',
        branch: null,
        grade: null,
        subject: null,
      },
      content: {
        flashcards: [],
      },
    }),
  })

  const flashcardDataObject = JSON.parse(flashcardData)

  const form = useForm({
    initialValues: flashcardDataObject.form,
    validationRules: {
      title: v => v.length > 2,
      description: v => v.length > 2,
      branch: v => v !== null,
    },
  })

  const newFlashcardHandler = flashcard => {
    dispatch({type: 'newflashcard', payload: flashcard})
    setModalOpened(false)
  }

  const updateFlashcardHandler = flashcard => {
    dispatch({type: 'updateflashcard', payload: flashcard})
    setModalOpened(false)
  }

  const [modalOpened, setModalOpened] = useState(false)
  const [dataToBeUpdated, setDataToBeUpdated] = useState({})

  const modalTitle = ''

  switch (modalOpened) {
    case 'newflashcard':
      modalTitle = 'انشاء فلاشكارد جديد'
      break
    case 'updateflashcard':
      modalTitle = 'تعديل فلاشكارد'
      break
    default:
      break
  }

  const [flashcards, dispatch] = useReducer(
    flashcardsReducer,
    flashcardDataObject.content.flashcards,
  )

  useEffect(() => {
    // store data to local storage after every dispatch
    setFlashcardData(JSON.stringify({form: form.values, content: {flashcards}}))
  }, [setFlashcardData, form.values, flashcards])

  const [activePage, setPage] = useState(1)

  const FCsPerPage = 12
  const numberOfFCs = flashcards.length
  const numberOfPages = Math.ceil(numberOfFCs / FCsPerPage)
  const from = Math.max(FCsPerPage * (activePage - 1), 0)
  const to = Math.min(FCsPerPage * activePage, numberOfFCs)

  return (
    <div>
      <Title order={4} mb="xl">
        إنشاء فلاشكارد جديد
      </Title>
      <form
        onSubmit={form.onSubmit(values => {
          console.log('submitting a new flashcard ', values)
        })}
      >
        <TextInput
          mb="md"
          label="غنوان الفلاشكارد"
          required
          value={form.values.title}
          error={form.errors.title && 'Insert a title'}
          onChange={event =>
            form.setFieldValue('title', event.currentTarget.value)
          }
        />
        <Textarea
          mb="md"
          label="نبدة عن الفلاشكارد"
          required
          value={form.values.description}
          error={form.errors.description && 'Insert a description'}
          onChange={event =>
            form.setFieldValue('description', event.currentTarget.value)
          }
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

        <Button mb="md" onClick={() => setModalOpened('newflashcard')}>
          <Box ml="md">
            <PlusIcon />
          </Box>
          فلاشكارد جديد
        </Button>

        <Grid gutter="xl" mb="md">
          {flashcards.slice(from, to).map(fc => {
            return (
              <Col span={6} key={fc.id}>
                <Group
                  sx={theme => ({
                    padding: theme.spacing.md,
                    backgroundColor:
                      theme.colorScheme === 'light'
                        ? theme.colors.gray[0]
                        : theme.colors.dark[9],
                  })}
                  position="apart"
                >
                  <Text
                    style={{cursor: 'pointer'}}
                    onClick={() => {
                      setModalOpened('updateflashcard')
                      setDataToBeUpdated(fc)
                    }}
                  >
                    {fc.front}
                  </Text>
                  <div>
                    <ActionIcon
                      variant="transparent"
                      color="red"
                      onClick={() =>
                        dispatch({
                          type: 'removeflashcard',
                          payload: {id: fc.id},
                        })
                      }
                    >
                      <Cross2Icon />
                    </ActionIcon>
                  </div>
                </Group>
              </Col>
            )
          })}
        </Grid>

        <Center>
          <Pagination
            page={activePage}
            onChange={setPage}
            total={numberOfPages}
            mb="md"
          />
        </Center>

        <Group position="right">
          <Button type="submit">اضف</Button>
        </Group>
      </form>

      <Modal
        styles={{
          modal: {
            width: '40%',
          },
        }}
        title={modalTitle}
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
      >
        {modalOpened == 'newflashcard' && (
          <FlashcardForm handler={newFlashcardHandler} />
        )}
        {modalOpened == 'updateflashcard' && (
          <FlashcardForm
            handler={updateFlashcardHandler}
            flashcard={dataToBeUpdated}
          />
        )}
      </Modal>
    </div>
  )
}

export default Newflashcard
