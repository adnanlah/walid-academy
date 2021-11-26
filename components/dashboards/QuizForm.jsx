import {
  ActionIcon,
  Box,
  Button,
  Checkbox,
  Divider,
  Group,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core'
import {useForm} from '@mantine/hooks'
import {PlusIcon, Cross2Icon, CheckIcon} from '@modulz/radix-icons'
import {useState, useReducer} from 'react'
import InputAddon from '../InputAddon'

const nextId = array => array[array.length - 1].id + 1

const quizReducer = (state, action) => {
  const {options, questions} = state
  switch (action.type) {
    // OPTIONS
    case 'newoption':
      return {
        ...state,
        options: [
          ...options,
          {
            id: nextId(options),
            questionId: action.payload.questionId,
            content: '',
          },
        ],
      }
    case 'updateoptioncontent':
      return {
        ...state,
        options: options.map(option =>
          option.id === action.payload.id
            ? {...option, content: action.payload.content}
            : option,
        ),
      }
    case 'deleteoption':
      return {
        ...state,
        options: options.filter(option => option.id !== action.payload.id),
      }

    // QUESTIONS
    case 'newquestion':
      const newQuestionId = nextId(questions)
      const newOptionId = nextId(options)

      return {
        ...state,
        questions: [
          ...questions,
          {
            id: newQuestionId,
            content: '',
            correctAnswer: newOptionId,
          },
        ],
        options: [
          ...options,
          {
            id: newOptionId,
            questionId: newQuestionId,
            content: '',
          },
        ],
      }
    case 'setcorrectanswer':
      const updatedQuestions = questions.map(question => {
        return question.id === action.payload.questionId
          ? {...question, correctAnswer: action.payload.optionId}
          : question
      })
      return {...state, questions: updatedQuestions}
    case 'updatequestioncontent':
      const updatedQuestions2 = questions.map(question => {
        return question.id === action.payload.id
          ? {...question, content: action.payload.content}
          : question
      })
      return {...state, questions: updatedQuestions2}
    case 'deletequestion':
      return {
        ...state,
        options: options.filter(
          option => option.chapterId !== action.payload.id,
        ),
        questions: questions.filter(
          question => question.id !== action.payload.id,
        ),
      }
  }
}

const QuizForm = ({handler, quiz, chapterId}) => {
  console.log({quiz})
  const form = useForm({
    initialValues: quiz
      ? quiz
      : {
          chapterId,
          title: '',
          description: '',
        },
    validationRules: {
      title: v => v.length > 2,
      description: v => v.length > 2,
    },
  })

  const [quizErrors, setQuizErrors] = useState([])

  const [{questions, options}, dispatch] = useReducer(
    quizReducer,
    quiz
      ? quiz.content
      : {
          questions: [
            {
              id: 0,
              content: '',
              correctAnswer: 0,
            },
          ],
          options: [
            {
              id: 0,
              questionId: 0,
              content: '',
            },
          ],
        },
  )

  const validateQuiz = () => {
    setQuizErrors([])
    if (questions.length < 1 || options.length < 2) {
      setQuizErrors(qe => [
        ...qe,
        'You should add more than 1 question and more than 2 options',
      ])
      return true
    }
    if (!questions.every(q => q.content.length > 1)) {
      setQuizErrors(qe => [...qe, 'Questions should not be empty'])
      return true
    }
    if (!options.every(o => o.content.length > 1)) {
      setQuizErrors(qe => [...qe, 'Options should not be empty'])
      return true
    }
  }

  const errorsList = quizErrors.map((quizError, idx) => (
    <Text key={idx} color="red">
      {quizError}
    </Text>
  ))

  const submitQuizHandler = form.onSubmit(values => {
    const err = validateQuiz()
    if (!err) handler({...values, content: {questions, options}})
  })

  return (
    <div>
      <form onSubmit={submitQuizHandler}>
        <TextInput
          data-autofocus
          mb="xs"
          label="عنوان الكويز"
          value={form.values.title}
          error={form.errors.title && 'Insert a title'}
          onChange={event =>
            form.setFieldValue('title', event.currentTarget.value)
          }
        />
        <Textarea
          mb="xs"
          label="نبدة عن الكويز"
          value={form.values.description}
          error={form.errors.description && 'Insert a description'}
          onChange={event =>
            form.setFieldValue('description', event.currentTarget.value)
          }
        />
        <Checkbox
          mb="xs"
          label="مجاني"
          checked={form.values.free}
          onChange={event =>
            form.setFieldValue('free', event.currentTarget.checked)
          }
        />
        {questions.map((question, idx) => {
          return (
            <Box key={idx} mb="md">
              <Text mb="xs">السؤال رقم {idx + 1}</Text>
              <InputAddon
                value={question.content}
                mb="xs"
                onChange={event =>
                  dispatch({
                    type: 'updatequestioncontent',
                    payload: {id: question.id, content: event.target.value},
                  })
                }
              >
                <ActionIcon
                  onClick={() => {
                    dispatch({
                      type: 'deletequestion',
                      payload: {id: question.id},
                    })
                  }}
                  variant="transparent"
                  color="red"
                >
                  <Cross2Icon />
                </ActionIcon>
              </InputAddon>
              <Group mb="xs">
                <Divider size={15} orientation="vertical"></Divider>
                <div style={{flexGrow: 1}}>
                  <Text mb="xs">الخيارات</Text>
                  {options
                    .filter(o => o.questionId === question.id)
                    .map((option, idx) => (
                      <InputAddon
                        key={idx}
                        value={option.content}
                        onChange={value =>
                          dispatch({
                            type: 'updateoptioncontent',
                            payload: {
                              id: option.id,
                              content: event.target.value,
                            },
                          })
                        }
                        mb="xs"
                      >
                        <ActionIcon
                          onClick={() => {
                            dispatch({
                              type: 'setcorrectanswer',
                              payload: {
                                optionId: option.id,
                                questionId: question.id,
                              },
                            })
                          }}
                          variant="transparent"
                          color={
                            question.correctAnswer === option.id
                              ? 'green'
                              : 'gray'
                          }
                        >
                          <CheckIcon />
                        </ActionIcon>
                        <ActionIcon
                          onClick={() => {
                            dispatch({
                              type: 'deleteoption',
                              payload: {id: option.id},
                            })
                          }}
                          variant="transparent"
                          color="red"
                        >
                          <Cross2Icon />
                        </ActionIcon>
                      </InputAddon>
                    ))}
                  <Button
                    onClick={() => {
                      dispatch({
                        type: 'newoption',
                        payload: {questionId: question.id},
                      })
                    }}
                    compact
                    color="gray"
                  >
                    <Box ml="xs">
                      <PlusIcon />
                    </Box>
                    خيار جديد
                  </Button>
                </div>
              </Group>
            </Box>
          )
        })}
        <Box mb="xs">
          <Button
            compact
            color="dark"
            onClick={() => {
              dispatch({
                type: 'newquestion',
              })
            }}
          >
            <Box ml="xs">
              <PlusIcon />
            </Box>
            سؤال جديد
          </Button>
        </Box>
        <Box mb="xs">{quizErrors && errorsList}</Box>
        <Button type="submit">اضف الكويز</Button>
      </form>
    </div>
  )
}

export default QuizForm
