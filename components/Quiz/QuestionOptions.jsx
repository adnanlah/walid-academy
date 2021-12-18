import Option from './Option'

const Questionoptions = ({question, onAttempt, userAttempt, showResults}) => {
  return (
    <div>
      {question.options.map(option => {
        return (
          <Option
            key={option.id}
            onAttempt={onAttempt}
            showResults={showResults}
            option={option}
            isChecked={userAttempt === option.id}
            isCorrectAnswer={question.correctAnswer === option.id}
          />
        )
      })}
    </div>
  )
}

export default Questionoptions
