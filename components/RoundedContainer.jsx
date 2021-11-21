import {Box, Text} from '@mantine/core'

const Roundedcontainer = props => {
  return (
    <Box
      sx={t => ({
        width: '50%',
        backgroundColor:
          t.colorScheme === 'light' ? `#F6F6F6` : t.colors.dark[8],
        padding: t.spacing.md,
        borderRadius: t.spacing.xs,
        border: `1px solid ${
          t.colorScheme === 'light' ? t.colors.gray[2] : t.colors.dark[7]
        }`,
      })}
    >
      <Box mb="xs">
        <Text size="md" weight={700} component="span">
          {props.header}
        </Text>
      </Box>
      <Box>
        <Text>{props.content}</Text>
      </Box>
    </Box>
  )
}

export default Roundedcontainer
