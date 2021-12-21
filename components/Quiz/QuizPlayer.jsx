import {Button, Center, Group, Paper, Popover, Text} from '@mantine/core'
import {useState} from 'react'
import DottedPagination from '../DottedPagination'
import {ReloadIcon, StarFilledIcon} from '@modulz/radix-icons'
import QuestionOptions from './QuestionOptions'

const Quiz = ({questions}) => {
  const [activeQuestionIdx, setQuestionIdx] = useState(0)
  const [points, setPoints] = useState(0)
  const [showResults, setshowResults] = useState(false)

  const [userAttempt, setUserAttempt] = useState(null)
  const [userAnsweredCorrectly, setUserAnsweredCorrectly] = useState(false)

  const activeQuestion = questions[activeQuestionIdx]
  const numberOfQuestions = questions.length

  const userAttemptedHandler = optionId => setUserAttempt(optionId)

  const checkAnswer = () => {
    // checking the user's answer
    if (questions[activeQuestionIdx].correctAnswer === userAttempt) {
      setPoints(p => p + 1)
      setUserAnsweredCorrectly(true)
    }
    setshowResults(true)
  }

  const nextQuestion = () => {
    setQuestionIdx(v => v + 1)
    setshowResults(false)
    setUserAttempt(null)
    setUserAnsweredCorrectly(null)
  }

  const QuestionResultMessage = ({message, icon}) => {
    return (
      <Paper sx={t => ({padding: t.spacing.xl})}>
        <Group>
          {icon}
          <div>
            <Text size="lg" weight={500}>
              {message}
            </Text>
          </div>
        </Group>
      </Paper>
    )
  }

  let targetButton
  if (!showResults) {
    targetButton = (
      <Button disabled={!userAttempt} onClick={() => checkAnswer()}>
        اختبر
      </Button>
    )
  } else {
    targetButton = <Button onClick={() => nextQuestion()}>السؤال التالي</Button>
  }

  let content // You either show the questions, or the final result!
  if (activeQuestionIdx < numberOfQuestions) {
    content = (
      <>
        <Text mb="md" size="lg" weight={500}>
          {activeQuestion.content}
        </Text>
        <QuestionOptions
          question={activeQuestion}
          onAttempt={userAttemptedHandler}
          userAttempt={userAttempt}
          showResults={showResults}
        />
      </>
    )
  } else {
    content = (
      <Center
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          top: 0,
          right: 0,
        }}
      >
        <div>
          <Center mb="xl">
            {points < numberOfQuestions / 2 && (
              <ReloadIcon style={{width: 40, height: 40}} />
            )}
            {points > numberOfQuestions / 2 && (
              <StarFilledIcon color="gold" style={{width: 40, height: 40}} />
            )}
          </Center>
          <Text align="center" size="xl">
            انتهى الكويز
          </Text>
          <Text component="span" align="center" size="lg">
            لقد اجبت على {points}/{numberOfQuestions} من الاسئلة
          </Text>
        </div>
      </Center>
    )
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        height: '100%',
      }}
    >
      <div style={{flexGrow: 2}}>
        <Paper
          sx={theme => ({
            position: 'relative',
            height: '100%',
            padding: `${theme.spacing.xl}px 5%`,
          })}
        >
          {content}
        </Paper>
      </div>

      <Group position="apart">
        <Popover
          opened={showResults}
          target={targetButton}
          position="top"
          withArrow
          spacing={0}
        >
          <QuestionResultMessage
            message={userAnsweredCorrectly ? 'احسنت' : 'احابة حاطئة'}
            icon={
              userAnsweredCorrectly ? (
                <StarFilledIcon color="gold" style={{width: 40, height: 40}} />
              ) : (
                <ReloadIcon style={{width: 40, height: 40}} />
              )
            }
          />
        </Popover>

        <Group>
          <DottedPagination
            page={activeQuestionIdx + 1}
            total={numberOfQuestions}
            clickable={false}
          />
          <Text weight={700}>
            سؤال {activeQuestionIdx + 1} من {numberOfQuestions}
          </Text>
        </Group>
      </Group>
    </div>
  )
}

export default Quiz
