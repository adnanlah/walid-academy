import {Center, Text} from '@mantine/core'
import {useMantineColorScheme} from '@mantine/styles'
import {MoonIcon, SunIcon} from '@modulz/radix-icons'
import Toggle from 'react-toggle'

const MyToggle = () => {
  const {colorScheme, toggleColorScheme} = useMantineColorScheme()
  const dark = colorScheme === 'dark'

  const moon = <MoonIcon color="yellow" style={{width: 16, height: 16}} />

  const sun = <SunIcon color="yellow" style={{width: 16, height: 16}} />

  return (
    <Center inline>
      <Toggle
        icons={{
          checked: moon,
          unchecked: sun,
        }}
        checked={dark}
        onChange={e => toggleColorScheme()}
      />
      <label htmlFor="cheese-status" style={{marginRight: 10}}>
        <Text>{dark ? 'الوضع الليلي' : 'الوضع النهاري'}</Text>
      </label>
    </Center>
  )
}

export default MyToggle
