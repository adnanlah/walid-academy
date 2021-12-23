import Link from 'next/link'

import {
  createStyles,
  Anchor,
  Box,
  Button,
  Title,
  Divider,
  Text,
  Modal,
  Menu,
  Avatar,
  Group,
} from '@mantine/core'
import {AvatarIcon, ExitIcon, GearIcon} from '@modulz/radix-icons'
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
      boxShadow: theme.shadows.xs,
      position: `relative`,
      zIndex: 99,
    },
    inner: {
      padding: `${theme.spacing.md}px 0`,
      width: '65%',
      maxWidth: 1280,
      margin: '0 auto',
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
          <Menu.Item icon={<AvatarIcon />}>
            <Anchor variant="text" href="/settings">
              الاعدادات
            </Anchor>
          </Menu.Item>
          <Menu.Item icon={<GearIcon />}>
            <Anchor variant="text" href="/dashboard">
              لوحة التحكم
            </Anchor>
          </Menu.Item>
          <Menu.Item icon={<ExitIcon />}>
            <Anchor
              variant="text"
              href="#"
              onClick={() => {
                setAuth(false)
              }}
            >
              خروج
            </Anchor>
          </Menu.Item>
        </Menu>,
      )
    }
  }, [auth, setAuth])

  return (
    <nav className={classes.wrapper}>
      <Group align="stretch" noWrap className={classes.inner}>
        <div>
          <NavItem href="/">
            <Title order={3}>اكاديمية وليد</Title>
          </NavItem>
        </div>
        <div className={cx(classes.navLinks, classes.navLinksStart)}>
          <NavItem href="/browse">اكتشف</NavItem>
          {menuElement}
          <Link href="/signup" passHref>
            <Anchor>
              <Button>ابدا من هنا</Button>
            </Anchor>
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
    </nav>
  )
}

function NavItem({href, children, ...restProps}) {
  return (
    <Box {...restProps}>
      <Link href={href} passHref>
        <Anchor variant="text">{children}</Anchor>
      </Link>
    </Box>
  )
}

export default Nav
