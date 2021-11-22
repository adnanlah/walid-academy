import {Box, Group, Text} from '@mantine/core'
import {
  RadiobuttonIcon,
  SquareIcon,
  Cross2Icon,
  CheckboxIcon,
} from '@modulz/radix-icons'

const Option = ({
  option,
  disabled,
  isChecked,
  isCorrectAnswer,
  handler,
  showResults,
}) => {
  // status can be: checked, unchecked,

  const icon = <SquareIcon />

  const checkHandler = () => {
    if (disabled) return
    handler(option.id)
  }

  return (
    <Box
      sx={theme => ({
        cursor: 'pointer',
        padding: `${theme.spacing.md}px ${theme.spacing.lg}px`,
        '&:hover': {
          backgroundColor: theme.colors.gray[1],
        },
      })}
      onClick={checkHandler}
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
