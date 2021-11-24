import {Box} from '@mantine/core'
import Option from './Option'

const Questionoptions = ({question, checkHandle, userAnswers, showResults}) => {
  return (
    <Box>
      {question.options.map(option => {
        return (
          <Option
            key={option.id}
            handler={checkHandle}
            showResults={showResults}
            option={option}
            question={question}
            isChecked={userAnswers[question.id] === option.id}
            isCorrectAnswer={question.correctAnswer === option.id}
          />
        )
      })}
    </Box>
  )
}

export default Questionoptions
