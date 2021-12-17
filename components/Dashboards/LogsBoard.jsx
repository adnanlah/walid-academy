import {Center, List, Pagination, Title} from '@mantine/core'
import {lorem} from '../../util/helpers'

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
        <List.Item>{lorem(20)}</List.Item>
        <List.Item>{lorem(20)}</List.Item>
        <List.Item>{lorem(20)}</List.Item>
        <List.Item>{lorem(20)}</List.Item>
        <List.Item>{lorem(20)}</List.Item>
        <List.Item>{lorem(20)}</List.Item>
        <List.Item>{lorem(20)}</List.Item>
        <List.Item>{lorem(20)}</List.Item>
      </List>

      <Center>
        <Pagination></Pagination>
      </Center>
    </div>
  )
}

export default Logs
