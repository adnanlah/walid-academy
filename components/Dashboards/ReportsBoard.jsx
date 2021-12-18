import {Anchor, Center, List, Pagination, ThemeIcon, Title} from '@mantine/core'
import {ChatBubbleIcon, ExclamationTriangleIcon} from '@modulz/radix-icons'
import {useState} from 'react'
import {lorem} from '../../util/helpers'

const Reports = () => {
  const [text20, setText20] = useState('')

  useEffect(() => {
    setText20(lorem(20))
  }, [])
  return (
    <div>
      <Title order={3} mb="xl">
        التقارير
      </Title>
      <List
        spacing="sm"
        mb="xl"
        styles={theme => ({
          root: {paddingRight: 0},
          itemIcon: {paddingLeft: theme.spacing.xs},
        })}
      >
        <List.Item
          icon={
            <ThemeIcon color="red" variant="light" size={24} radius="xl">
              <ExclamationTriangleIcon size={12} />
            </ThemeIcon>
          }
        >
          <Anchor href="/">{text20}</Anchor>
        </List.Item>
        <List.Item
          icon={
            <ThemeIcon color="red" variant="light" size={24} radius="xl">
              <ChatBubbleIcon size={12} />
            </ThemeIcon>
          }
        >
          <Anchor href="/">{text20}</Anchor>
        </List.Item>
        <List.Item
          icon={
            <ThemeIcon color="red" variant="light" size={24} radius="xl">
              <ExclamationTriangleIcon size={12} />
            </ThemeIcon>
          }
        >
          <Anchor href="/">{text20}</Anchor>
        </List.Item>
      </List>

      <Center>
        <Pagination></Pagination>
      </Center>
    </div>
  )
}

export default Reports
