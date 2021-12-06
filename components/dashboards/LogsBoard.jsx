import {Anchor, Center, List, Pagination, Title} from '@mantine/core'
import Lorem from '../../util/lorem'

const Logs = () => {
  return (
    <div>
      <Title order={3} mb="xl">
        السجل
      </Title>
      <List
        spacing="sm"
        mb="xl"
        styles={theme => ({root: {paddingRight: theme.spacing.xs}})}
      >
        <List.Item>{Lorem(20)}</List.Item>
        <List.Item>{Lorem(20)}</List.Item>
        <List.Item>{Lorem(20)}</List.Item>
        <List.Item>{Lorem(20)}</List.Item>
        <List.Item>{Lorem(20)}</List.Item>
        <List.Item>{Lorem(20)}</List.Item>
        <List.Item>{Lorem(20)}</List.Item>
        <List.Item>{Lorem(20)}</List.Item>
      </List>

      <Center>
        <Pagination></Pagination>
      </Center>
    </div>
  )
}

export default Logs
