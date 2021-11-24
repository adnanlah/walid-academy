import {
  Box,
  Button,
  Center,
  Group,
  Paper,
  Popover,
  Text,
  Title,
  Tooltip,
} from '@mantine/core'
import {useState, useReducer} from 'react'
import QuizPagination from './QuizPagination'
import {ReloadIcon, StarFilledIcon} from '@modulz/radix-icons'
import {useScrollIntoView, useForceUpdate} from '@mantine/hooks'
import QuestionOptions from './QuestionOptions'

const Quiz = ({quizData, QuestionsPerPage}) => {
  // creating a clone of the prop because it will be mutated..
  const quiz = {...quizData}
  const [activePage, setPage] = useState(1)
  const [points, setPoints] = useState(0)
  const [tooltipOpened, setTooltipOpened] = useState(false)
  const [showResults, setshowResults] = useState(false)
  const [popoverOpened, setPopoverOpened] = useState(false)
  const {scrollIntoView, targetRef} = useScrollIntoView({
    offset: 100,
    duration: 500,
  })

  const reducer = (state, action) => {
    // pareInt because the value comes from the radio input and it does return a string rather than an int
    switch (action.type) {
      case 'answer':
        return {...state, [action.questionId]: parseInt(action.answerId)}
      default:
        throw new Error()
    }
  }

  const [userAnswers, dispatch] = useReducer(reducer, {})

  const checkHandle = (answerId, questionId) => {
    dispatch({type: 'answer', questionId, answerId})
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

  const paginationOnChange = page => {
    scrollIntoView({})
    setPage(page)
  }

  const QuizEndMessage = ({message, icon}) => {
    return (
      <Paper sx={t => ({padding: t.spacing.xl})}>
        <Group mb="lg">
          {icon}
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
          <Button
            onClick={() => {
              setPopoverOpened(o => !o)
              setPage(1)
              scrollIntoView({})
            }}
          >
            شاهد النتائج
          </Button>
        </Center>
      </Paper>
    )
  }

  return (
    <div ref={targetRef}>
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
            <QuestionOptions
              question={question}
              checkHandle={checkHandle}
              userAnswers={userAnswers}
              showResults={showResults}
            />
          </Paper>
        ))}
      </Box>

      <Group position="apart" style={{padding: '0 15%'}}>
        <Popover
          opened={popoverOpened}
          onClose={() => setPopoverOpened(false)}
          target={
            <Tooltip
              opened={tooltipOpened}
              label="اجب على كل الاسئلة قبل ان تختبر"
              position="bottom"
              withArrow
            >
              <Button
                onPointerEnter={() => {
                  setTooltipOpened(true)
                }}
                onPointerLeave={() => {
                  setTooltipOpened(false)
                }}
                onClick={() => checkAnswers()}
                disabled={numberOfQuestions > Object.keys(userAnswers).length} // disable if user didn't answer all the questions
              >
                اختبر
              </Button>
            </Tooltip>
          }
          position="top"
          withArrow
          spacing={0}
        >
          {points > numberOfQuestions / 2 && (
            <QuizEndMessage
              message="احسنت"
              icon={
                <StarFilledIcon color="gold" style={{width: 50, height: 50}} />
              }
            />
          )}
          {points < numberOfQuestions / 2 && (
            <QuizEndMessage
              icon={<ReloadIcon style={{width: 50, height: 50}} />}
              message="حاول لاحقا"
            />
          )}
        </Popover>

        <Group>
          <QuizPagination
            page={activePage}
            onChange={paginationOnChange}
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
