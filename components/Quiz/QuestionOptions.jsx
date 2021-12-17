import Option from './Option'

const Questionoptions = ({question, checkHandle, userAttempt, showResults}) => {
  return (
    <div>
      {question.options.map(option => {
        return (
          <Option
            key={option.id}
            handler={checkHandle}
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
