import {Box, Group, Text} from '@mantine/core'
import {SquareIcon, CheckboxIcon} from '@modulz/radix-icons'

const Option = ({
  option,
  question,
  isChecked,
  isCorrectAnswer,
  handler,
  showResults,
}) => {
  const successColor = '#C6DAB7'
  const failColor = '#FF9292'

  const optionBgL = showResults
    ? isCorrectAnswer
      ? '#C6DAB7'
      : isChecked
      ? '#FF9292'
      : 'none'
    : 'none'

  const optionBgD = showResults
    ? isCorrectAnswer
      ? '#2C3129'
      : isChecked
      ? '#382020'
      : 'none'
    : 'none'

  const icon = isChecked ? (
    <CheckboxIcon style={{width: 20, height: 20}} />
  ) : (
    <SquareIcon style={{width: 20, height: 20}} />
  )

  return (
    <Box
      sx={theme => ({
        cursor: 'pointer',
        padding: `${theme.spacing.md}px ${theme.spacing.lg}px`,
        backgroundColor: theme.colorScheme === 'light' ? optionBgL : optionBgD,
        marginBottom: theme.spacing.xs,
        '&:hover': {
          backgroundColor: !showResults && theme.colors.gray[1],
        },
      })}
      onClick={() => {
        if (showResults) return
        handler(option.id, question.id)
      }}
    >
      <Group>
        <Box>{icon}</Box>
        <Box>
          <Text style={{flexGrow: 1}}>{option.content}</Text>
        </Box>
      </Group>
    </Box>
  )
}

export default Option
