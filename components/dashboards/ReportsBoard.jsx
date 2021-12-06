import {Anchor, Center, List, Pagination, Title} from '@mantine/core'
import Lorem from '../../util/lorem'

const Reports = () => {
  return (
    <div>
      <Title order={3} mb="xl">
        التقارير
      </Title>
      <List
        spacing="sm"
        mb="xl"
        styles={theme => ({root: {paddingRight: theme.spacing.xs}})}
      >
        <List.Item>
          <Anchor href="/">{Lorem(20)}</Anchor>
        </List.Item>
        <List.Item>
          <Anchor href="/">{Lorem(20)}</Anchor>
        </List.Item>
        <List.Item>
          <Anchor href="/">{Lorem(20)}</Anchor>
        </List.Item>
        <List.Item>
          <Anchor href="/">{Lorem(20)}</Anchor>
        </List.Item>
        <List.Item>
          <Anchor href="/">{Lorem(20)}</Anchor>
        </List.Item>
        <List.Item>
          <Anchor href="/">{Lorem(20)}</Anchor>
        </List.Item>
        <List.Item>
          <Anchor href="/">{Lorem(20)}</Anchor>
        </List.Item>
        <List.Item>
          <Anchor href="/">{Lorem(20)}</Anchor>
        </List.Item>
      </List>

      <Center>
        <Pagination></Pagination>
      </Center>
    </div>
  )
}

export default Reports
