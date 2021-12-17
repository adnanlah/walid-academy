import {Box, Group, Text} from '@mantine/core'
import {SquareIcon, CheckboxIcon, BoxModelIcon} from '@modulz/radix-icons'

const Option = ({option, isChecked, isCorrectAnswer, handler, showResults}) => {
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

  let icon

  if (isChecked) icon = <BoxModelIcon style={{width: 20, height: 20}} />
  else if (isCorrectAnswer && showResults)
    icon = <CheckboxIcon style={{width: 20, height: 20}} />
  else icon = <SquareIcon style={{width: 20, height: 20}} />

  return (
    <Box
      sx={theme => ({
        cursor: 'pointer',
        padding: `${theme.spacing.md}px ${theme.spacing.lg}px`,
        backgroundColor: theme.colorScheme === 'light' ? optionBgL : optionBgD,

        '&:hover': {
          backgroundColor: !showResults && theme.colors.gray[1],
        },
      })}
      onClick={() => {
        if (showResults) return
        handler(option.id)
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
