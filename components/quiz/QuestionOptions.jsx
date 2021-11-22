import {Radio, RadioGroup} from '@mantine/core'
import Optionsgroup from './optionsGroup'

const Questionoptions = ({question, checkHandle, userAnswers, showResults}) => {
  const colorScheme = 'light'
  const successColor = colorScheme === 'light' ? '#B4C6A6' : '#2A2E27'
  const failColor = colorScheme === 'light' ? '#FF9292' : '#361F1F'

  return (
    <RadioGroup
      onChange={value => checkHandle(value, question.id)}
      defaultValue={`${userAnswers[question.id]}`}
      variant="vertical"
      color="dark"
      spacing="xs"
      styles={theme => ({
        label: {
          cursor: 'pointer',
        },
        radioWrapper: {
          width: '100%',
          padding: `${theme.spacing.md}px ${theme.spacing.md}px`,
          borderRadius: theme.spacing.xs,
        },
        radio: {
          '&:disabled + span': {
            color:
              theme.colorScheme.light === 'light'
                ? 'black'
                : theme.colors.dark[0],
          },
          margin: `0 0 0 ${theme.spacing.xs}px`,
          cursor: 'pointer',
        },
      })}
    >
      {question.options.map(option => {
        const optionBgL = showResults
          ? option.id === question.correctAnswer
            ? successColor
            : option.id === userAnswers[question.id]
            ? failColor
            : 'none'
          : 'none'

        const optionBgD = showResults
          ? option.id === question.correctAnswer
            ? successColor
            : option.id === userAnswers[question.id]
            ? failColor
            : 'none'
          : 'none'

        const optionBg = colorScheme === 'light' ? optionBgL : optionBgD

        return (
          <Radio
            key={option.id}
            disabled={showResults}
            value={`${option.id}`}
            sx={{
              backgroundColor: optionBg,
            }}
          >
            {option.content}
          </Radio>
        )
      })}
    </RadioGroup>
  )
}

export default Questionoptions
