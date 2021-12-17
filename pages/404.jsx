import {Center, Title} from '@mantine/core'

export default function Custom500() {
  return (
    <Center style={{height: '100vh'}}>
      <div>
        <Title order={2} align="center" color="dimmed">
          404
        </Title>
        <Title order={4} align="center" color="dimmed">
          Makashou
        </Title>
      </div>
    </Center>
  )
}
