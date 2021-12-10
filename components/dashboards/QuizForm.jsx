import {
  ActionIcon,
  Box,
  Button,
  Divider,
  Group,
  Text,
  Title,
} from '@mantine/core'
import {PlusIcon, Cross2Icon, CheckIcon} from '@modulz/radix-icons'
import {useState} from 'react'
import InputAddon from '../InputAddon'

const QuizForm = ({dispatch, questions, options}) => {
  const [quizErrors, setQuizErrors] = useState([])

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

  // const submitQuizHandler = form.onSubmit(values => {
  //   const err = validateQuiz()
  //   if (!err) handler({...values, content: {questions, options}})
  // })

  return (
    <form>
      <Title order={4} mb="xs">
        انشاء الكويز
      </Title>
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
                      mb="xs"
                      onChange={event =>
                        dispatch({
                          type: 'updateoptioncontent',
                          payload: {
                            id: option.id,
                            content: event.target.value,
                          },
                        })
                      }
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
    </form>
  )
}

export default QuizForm
