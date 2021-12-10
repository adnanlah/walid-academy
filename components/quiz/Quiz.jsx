import {
  Button,
  Center,
  Group,
  Paper,
  Popover,
  Text,
  Tooltip,
} from '@mantine/core'
import {useState, useReducer} from 'react'
import DottedPagination from '../DottedPagination'
import {ReloadIcon, StarFilledIcon} from '@modulz/radix-icons'
import QuestionOptions from './QuestionOptions'

const Quiz = ({questions, questionsPerPage = 1}) => {
  // creating a clone of the prop because it will be mutated..
  const quizQuestions = [...questions]
  const [activePage, setPage] = useState(1)
  const [points, setPoints] = useState(0)
  const [tooltipOpened, setTooltipOpened] = useState(false)
  const [showResults, setshowResults] = useState(false)
  const [popoverOpened, setPopoverOpened] = useState(false)

  const reducer = (state, action) => {
    // pareInt because the value comes from the radio input and it returns a string rather than an int
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

  const numberOfQuestions = quizQuestions.length
  const numberOfPages = Math.ceil(numberOfQuestions / questionsPerPage)
  const from = Math.max(questionsPerPage * (activePage - 1), 0)
  const to = Math.min(questionsPerPage * activePage, numberOfQuestions)

  const checkAnswers = () => {
    // checking the user's userAnswers
    if (!showResults) {
      quizQuestions.map(question => {
        if (question.correctAnswer === userAnswers[question.id]) {
          setPoints(p => p + 1)
        }
      })
      setshowResults(true)
    }

    setPopoverOpened(o => !o)
  }

  const paginationOnChange = page => {
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
            }}
          >
            شاهد النتائج
          </Button>
        </Center>
      </Paper>
    )
  }

  return (
    <div
      ref={targetRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        height: '100%',
      }}
    >
      <div style={{flexGrow: 2}}>
        {quizQuestions.slice(from, to).map((question, idx) => (
          <Paper
            key={`${question.id}-${idx}`}
            sx={theme => ({
              padding: `${theme.spacing.xl}px 5%`,
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
      </div>

      <Group position="apart">
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
          <DottedPagination
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
