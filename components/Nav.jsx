import Link from 'next/link'

import {
  createStyles,
  Anchor,
  Box,
  Button,
  Title,
  Divider,
  Text,
  ActionIcon,
  Modal,
  Menu,
  Avatar,
  Group,
} from '@mantine/core'
import {GearIcon} from '@modulz/radix-icons'
import LoginForm from './LoginForm'
import {useEffect, useState} from 'react'
import {useLocalStorageValue} from '@mantine/hooks'

const useStyles = createStyles(theme => {
  return {
    wrapper: {
      backgroundColor:
        theme.colorScheme === 'light'
          ? theme.colors.gray[0]
          : theme.colors.dark[9],
      padding: `${theme.spacing.md}px 15%`,
      boxShadow: theme.shadows.xs,
      position: `relative`,
      zIndex: 99,
      '& > div': {
        width: `50%`,
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

function Nav() {
  const {classes, cx} = useStyles()
  const [auth, setAuth] = useLocalStorageValue({
    key: 'is-authenticated',
    defaultValue: false,
  })

  const [opened, setOpened] = useState(false)
  const [menuElement, setMenuElement] = useState(false)

  useEffect(() => {
    if (!JSON.parse(auth)) {
      setMenuElement(
        <Box
          mx="md"
          style={{cursor: 'pointer'}}
          onClick={() => setOpened(true)}
        >
          <Text>تسجيل دخول</Text>
        </Box>,
      )
    } else {
      setMenuElement(
        <Menu
          trigger="hover"
          placement="end"
          gutter={10}
          withArrow
          control={
            <Avatar
              style={{cursor: 'pointer'}}
              mx="md"
              src="/teacher2.png"
              alt="Profile pic"
              radius="xl"
            />
          }
          styles={{
            itemIcon: {
              marginRight: 0,
              marginLeft: 8,
            },
          }}
        >
          <Menu.Item icon={<GearIcon />}>
            <Anchor variant="text" href="/settings">
              الاعدادات
            </Anchor>
          </Menu.Item>
          <Menu.Item icon={<GearIcon />}>
            <Anchor variant="text" href="/dashboard">
              داشبورد
            </Anchor>
          </Menu.Item>
          <Menu.Item icon={<GearIcon />}>
            <Anchor variant="text" href="/logout">
              خروج
            </Anchor>
          </Menu.Item>
        </Menu>,
      )
    }
  }, [auth])

  return (
    <Group align="stretch" component="nav" noWrap className={classes.wrapper}>
      <div>
        <NavItem href="/">
          <Title order={3}>اكاديمية وليد</Title>
        </NavItem>
      </div>

      <div className={cx(classes.navLinks, classes.navLinksStart)}>
        <NavItem href="/browse">اكتشف</NavItem>

        <Divider orientation="vertical" size="xs" />

        {menuElement}

        <Link href="/signup" passHref>
          <Anchor>
            <Button>ابدا من هنا</Button>
          </Anchor>
        </Link>

        <Link href="/dashboard" passHref>
          <ActionIcon mr="md" size="lg" variant="outline">
            <GearIcon />
          </ActionIcon>
        </Link>
      </div>

      <Modal
        radius="xl"
        centered
        overlayOpacity={0.35}
        opened={opened}
        onClose={() => setOpened(false)}
        size="lg"
        styles={{
          body: {
            padding: '20% 25%',
          },
        }}
      >
        <LoginForm
          closeModal={() => {
            setOpened(false)
          }}
        />
      </Modal>
    </Group>
  )
}

function NavItem({href, children, ...restProps}) {
  return (
    <Box mx="md" {...restProps}>
      <Link href={href} passHref>
        <Anchor variant="text">{children}</Anchor>
      </Link>
    </Box>
  )
}

export default Nav
