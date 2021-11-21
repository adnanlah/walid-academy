import {
  Box,
  Button,
  Center,
  Group,
  Paper,
  Popover,
  Radio,
  RadioGroup,
  Text,
  Title,
} from '@mantine/core'
import {useState, useReducer} from 'react'
import QuizPagination from './QuizPagination'
import Image from 'next/image'
import {ReloadIcon, StarFilledIcon} from '@modulz/radix-icons'

const Quiz = ({quizData, QuestionsPerPage}) => {
  // creating a clone of the prop because it will be mutated..
  const quiz = {...quizData}
  const [activePage, setPage] = useState(1)
  const [points, setPoints] = useState(0)
  const [showResults, setshowResults] = useState(false)
  const [popoverOpened, setPopoverOpened] = useState(false)

  function reducer(state, action) {
    // pareInt because the value comes from the radio input and it does return a string rather than an int
    switch (action.type) {
      case 'answer':
        return {...state, [action.questionId]: parseInt(action.answerIdx)}
      default:
        throw new Error()
    }
  }
  const [userAnswers, dispatch] = useReducer(reducer, {})
  const checkHandle = (answerIdx, questionId) => {
    dispatch({type: 'answer', questionId, answerIdx})
  }

  const numberOfQuestions = quiz.questions.length
  const numberOfPages = Math.ceil(numberOfQuestions / QuestionsPerPage)
  const from = Math.max(QuestionsPerPage * (activePage - 1), 0)
  const to = Math.min(QuestionsPerPage * activePage, numberOfQuestions)

  const checkAnswers = () => {
    // checking the user's userAnswers
    if (!showResults) {
      quiz.questions.map(question => {
        if (question.correctAnswer === userAnswers[question.id]) {
          setPoints(p => p + 1)
        }
      })

      setshowResults(true)
    }

    setPopoverOpened(o => !o)
  }

  const TryLater = ({message, icon}) => {
    return (
      <Paper sx={t => ({padding: t.spacing.xl * 2})}>
        <Group mb="xs">
          <ReloadIcon style={{width: 50, height: 50}} />
          <div>
            <Text size="lg" weight={500}>
              {message}
            </Text>
            <Text size="md" weight={500}>
              لقد اجبت على {points}/{numberOfQuestions}
            </Text>
          </div>
        </Group>
        <Center>
          <Button onClick={() => setPage(1)}>شاهد النتائج</Button>
        </Center>
      </Paper>
    )
  }

  const Congratz = (
    <Group>
      <StarFilledIcon />
      <div>
        <Text size="lg" weight={500}>
          احسنت
        </Text>
        <Text size="md" weight={500}>
          لقد اجبت على {points}/{numberOfQuestions}
        </Text>
      </div>
    </Group>
  )

  return (
    <div>
      <Title order={4} mb="xs" align="center">
        {quiz.title}
      </Title>
      <Text mb="xl" align="center">
        {quiz.description}
      </Text>
      <Box>
        {quiz.questions.slice(from, to).map((question, idx) => (
          <Paper
            key={`${question.id}-${idx}`}
            sx={theme => ({
              padding: `${theme.spacing.xl}px 15%`,
              marginBottom: theme.spacing.md,
            })}
          >
            <Text mb="md" size="lg" weight={500}>
              {question.content}
            </Text>
            <RadioGroup
              onChange={value => checkHandle(value, question.id)}
              defaultValue={userAnswers[question.id]}
              variant="vertical"
              color="dark"
              spacing="xs"
              styles={theme => ({
                label: {
                  cursor: 'pointer',
                },
                radioWrapper: {
                  width: '100%',
                  padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
                },
                radio: {
                  '&:disabled + span': {color: 'black'},
                  margin: `0 0 0 ${theme.spacing.xs}px`,
                  cursor: 'pointer',
                },
              })}
            >
              {question.options.map(option => {
                const optionBg = showResults
                  ? option.id === question.correctAnswer
                    ? '#B1E693'
                    : option.id === userAnswers[question.id]
                    ? '#FE8F8F'
                    : 'none'
                  : 'none'

                return (
                  <Radio
                    disabled={showResults}
                    key={option.id}
                    value={`${option.id}`}
                    style={{
                      backgroundColor: optionBg,
                    }}
                  >
                    {option.content}
                  </Radio>
                )
              })}
            </RadioGroup>
          </Paper>
        ))}
      </Box>

      <Group position="apart" style={{padding: '0 15%'}}>
        <Popover
          opened={popoverOpened}
          onClose={() => setPopoverOpened(false)}
          target={
            <Button
              onClick={() => checkAnswers()}
              disabled={activePage !== numberOfPages}
            >
              اختبر
            </Button>
          }
          position="top"
          withArrow
          spacing={0}
        >
          {points > numberOfQuestions / 2 && Congratz}
          {points < numberOfQuestions / 2 && TryLater}
        </Popover>

        <Group>
          <QuizPagination
            page={activePage}
            onChange={setPage}
            total={numberOfPages}
          />
          <Text weight={700}>
            صفحة {activePage} من {numberOfPages}
          </Text>
        </Group>
      </Group>
    </div>
  )
}

export default Quiz
