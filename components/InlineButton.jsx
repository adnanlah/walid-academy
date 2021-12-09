import {Text} from '@mantine/core'

const InlineButton = ({children, ...prop}) => {
  return (
    <Text
      size="sm"
      weight={500}
      color="indigo"
      style={{cursor: 'pointer'}}
      {...prop}
    >
      {children}
    </Text>
  )
}

export default InlineButton
