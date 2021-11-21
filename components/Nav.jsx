import Link from 'next/link'

import {
  createStyles,
  Anchor,
  Box,
  Button,
  Title,
  Divider,
  Menu,
  MenuItem,
  MenuLabel,
  Text,
  ActionIcon,
  TextInput,
  Input,
  InputWrapper,
  useMantineColorScheme,
  Portal,
} from '@mantine/core'
import {
  MagnifyingGlassIcon,
  SunIcon,
  MoonIcon,
  GearIcon,
} from '@modulz/radix-icons'
import {useEffect, useState} from 'react'
import {useForm} from '@mantine/hooks'
import Router from 'next/router'

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

function NavLink({href, ...props}) {
  return (
    <Box mx="xs">
      <Link href={href} passHref>
        <Anchor>{props.children}</Anchor>
      </Link>
    </Box>
  )
}

function Nav() {
  const [opened, setOpened] = useState(false)
  const {classes, cx} = useStyles()
  const {colorScheme, toggleColorScheme} = useMantineColorScheme()
  const dark = colorScheme === 'dark'

  const form = useForm({
    initialValues: {
      query: '',
      termsOfService: false,
    },
  })

  // useEffect(() => {
  //   if (query.length > 0) {
  //   }
  //   return () => {}
  // }, [query])

  return (
    <nav className={classes.wrapper}>
      <div className={cx(classes.navLinks, classes.navLinksEnd)}>
        <NavLink href="/dashboard">
          <ActionIcon mr="md" size="lg" variant="outline" title="dash">
            <GearIcon />
          </ActionIcon>
        </NavLink>
        <NavLink href="/courses">
          <Text>الدروس</Text>
        </NavLink>
        <form
          onSubmit={form.onSubmit(values =>
            Router.push(`/search?q=${values.query}`),
          )}
        >
          <TextInput
            onChange={event =>
              form.setFieldValue('query', event.currentTarget.value)
            }
            styles={{
              root: {
                width: '80%',
              },
              input: {
                textAlign: 'right',
              },
              item: {
                textAlign: 'right',
              },
            }}
            icon={<MagnifyingGlassIcon />}
            placeholder="ابحث في الموقع"
          />
        </form>
      </div>

      <Box style={{textAlign: 'center'}}>
        <NavLink href="/">
          <Title order={3}>اكاديمية وليد</Title>
        </NavLink>
      </Box>

      <div className={cx(classes.navLinks, classes.navLinksStart)}>
        <NavLink href="/blog">
          <Text>المدونة</Text>
        </NavLink>

        <NavLink href="/forum">
          <Text>المنتدى</Text>
        </NavLink>

        <Divider orientation="vertical" size="xs" />

        <Menu
          control={
            <NavLink href="/">
              <Text>تسجيل دخول</Text>
            </NavLink>
          }
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
