import {Box, Button, Group} from '@mantine/core'
import {useForm} from '@mantine/hooks'
import {useReducer, useState} from 'react'
import LessonForm from './LessonForm'
import QuizForm from './QuizForm'

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
        options: options.filter(option => option.id !== action.payload.id),
        questions: questions.filter(
          question => question.id !== action.payload.id,
        ),
      }
  }
}

const Newlesson = ({handler, lesson}) => {
  const [page, setPage] = useState(0)

  // lesson basic data
  const form = useForm({
    initialValues: lesson
      ? lesson
      : {
          title: '',
          description: '',
          videoUrl: '',
          file: '',
          free: false,
        },
    validationRules: {
      title: v => v.length > 2,
      description: v => v.length > 2,
      videoUrl: v => v.length > 2,
    },
  })

  // lesson quia data
  const [{questions, options}, dispatch] = useReducer(
    quizReducer,
    lesson
      ? lesson.quiz
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
              content: '',
              questionId: 0,
            },
          ],
        },
  )

  return (
    <div>
      <Box style={{padding: `3% 0`}}>
        {page === 0 && <LessonForm form={form} />}
        {page === 1 && (
          <QuizForm
            dispatch={dispatch}
            questions={questions}
            options={options}
          />
        )}
      </Box>
      <Group>
        <Button onClick={() => setPage(1)}>Proceed to Quiz form</Button>
        <Button onClick={() => setPage(0)}>Go back to lesson form</Button>
        <Button
          onClick={() => {
            form.validate()
            console.log(form.errors)
          }}
        >
          Submit lesson
        </Button>
      </Group>
    </div>
  )
}

export default Newlesson
