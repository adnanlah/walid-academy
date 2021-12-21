import {Center, List, Pagination, Title} from '@mantine/core'
import {useEffect, useState} from 'react'
import {lorem} from '../../util/helpers'

const Logs = () => {
  const [text20, setText20] = useState('')

  useEffect(() => {
    setText20(lorem(20))
  }, [])

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
        <List.Item>{text20}</List.Item>
        <List.Item>{text20}</List.Item>
        <List.Item>{text20}</List.Item>
        <List.Item>{text20}</List.Item>
        <List.Item>{text20}</List.Item>
        <List.Item>{text20}</List.Item>
        <List.Item>{text20}</List.Item>
        <List.Item>{text20}</List.Item>
      </List>

      <Center>
        <Pagination />
      </Center>
    </div>
  )
}

export default Logs
