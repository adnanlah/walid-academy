import {Box, Center, Text} from '@mantine/core'
import {useMantineColorScheme} from '@mantine/styles'
import {MoonIcon, SunIcon} from '@modulz/radix-icons'
import Toggle from 'react-toggle'

const MyToggle = () => {
  const {colorScheme, toggleColorScheme} = useMantineColorScheme()
  const dark = colorScheme === 'dark'

  const moon = <MoonIcon color="yellow" style={{width: 18, height: 18}} />

  const sun = <SunIcon color="yellow" style={{width: 18, height: 18}} />

  return (
    <Center inline>
      {moon}
      <Center mx="xs">
        <Toggle
          icons={false}
          checked={dark}
          onChange={e => toggleColorScheme()}
        />
      </Center>
      {sun}
    </Center>
  )
}

export default MyToggle
