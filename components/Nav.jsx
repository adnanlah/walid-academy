import Link from 'next/link'

import {
  createStyles,
  Anchor,
  Box,
  Autocomplete,
  Button,
  Title,
  Divider,
  Menu,
  MenuItem,
  MenuLabel,
  Text,
  ActionIcon,
  Input,
  InputWrapper,
  useMantineColorScheme,
} from '@mantine/core'
import {MagnifyingGlassIcon, SunIcon, MoonIcon} from '@modulz/radix-icons'
import {useState} from 'react'

const useStyles = createStyles(theme => {
  return {
    wrapper: {
      backgroundColor:
        theme.colorScheme === 'light'
          ? theme.colors.gray[0]
          : theme.colors.dark[9],
      padding: `${theme.spacing.md}px 15%`,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: `center`,
      boxShadow: theme.shadows.xs,
      position: `relative`,
      '& > div': {
        width: `33%`,
      },
    },
    navLinks: {
      display: 'flex',
      alignItems: 'center',
    },
    navLinksStart: {
      justifyContent: 'flex-end',
    },
    navLinksEnd: {
      justifyContent: 'flex-start',
    },
  }
})

function NavLink(props) {
  return (
    <Box mx="xs">
      <Link href={props.link}>
        <Anchor href={props.link}>{props.children}</Anchor>
      </Link>
    </Box>
  )
}

function Nav() {
  const [opened, setOpened] = useState(false)
  const {classes, cx} = useStyles()
  const {colorScheme, toggleColorScheme} = useMantineColorScheme()
  const dark = colorScheme === 'dark'

  return (
    <nav className={classes.wrapper}>
      <div className={cx(classes.navLinks, classes.navLinksEnd)}>
        <NavLink link="/courses">
          <Text>الدروس</Text>
        </NavLink>

        <Autocomplete
          styles={{
            input: {
              textAlign: 'right',
            },
            item: {
              textAlign: 'right',
            },
          }}
          sx={_ => ({
            width: '50%',
          })}
          icon={<MagnifyingGlassIcon />}
          placeholder="ابحث في الموقع"
          data={['React', 'Angular', 'Svelte', 'Vue']}
        />
      </div>

      <Box style={{textAlign: 'center'}}>
        <NavLink link="/">
          <Title order={3}>اكاديمية وليد</Title>
        </NavLink>
      </Box>

      <div className={cx(classes.navLinks, classes.navLinksStart)}>
        <NavLink link="/blog">
          <Text>المدونة</Text>
        </NavLink>

        <NavLink link="/forum">
          <Text>المنتدى</Text>
        </NavLink>

        <Divider orientation="vertical" size="xs" />

        <Menu
          control={<Text>تسجيل دخول</Text>}
          closeOnItemClick={false}
          opened={opened}
          onOpen={() => setOpened(true)}
          onClose={() => setOpened(false)}
        >
          <Menu.Item component="div">
            <InputWrapper
              id="input-demo"
              required
              label="Credit card information"
              description="Please enter your credit card information, we need some money"
              error="Your credit card expired"
            >
              <Input id="input-demo" placeholder="Your email" />
            </InputWrapper>
          </Menu.Item>
        </Menu>

        <Button color="dark">ابدا من هنا</Button>

        <ActionIcon
          mr="md"
          size="lg"
          variant="outline"
          color={dark ? 'yellow' : 'blue'}
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme"
        >
          {dark ? <SunIcon /> : <MoonIcon />}
        </ActionIcon>
      </div>
    </nav>
  )
}

export default Nav
