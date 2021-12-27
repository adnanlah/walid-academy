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
import MyContainer from './MyContainer'
import useUser from 'hooks/useUser'
import {logout} from 'util/auth'

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
      padding: `${theme.spacing.xs}px 0`,

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
  const {user, mutate, loggedOut} = useUser()
  const {classes, cx} = useStyles()

  const [opened, setOpened] = useState(false)
  const [menuElement, setMenuElement] = useState(false)
  // let menuElement
  useEffect(() => {
    if (user && !loggedOut) {
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
          <Menu.Item icon={<GearIcon />} component="a" href="/dashboard">
            لوحة التحكم
          </Menu.Item>
          <Menu.Item
            icon={<ExitIcon />}
            onClick={() => {
              logout()
              mutate()
            }}
          >
            <Box>خروج</Box>
          </Menu.Item>
        </Menu>,
      )
    } else {
      setMenuElement(
        <Box
          mx="md"
          style={{cursor: 'pointer'}}
          onClick={() => setOpened(true)}
        >
          <Text>تسجيل دخول</Text>
        </Box>,
      )
    }
  }, [user, loggedOut, mutate])

  return (
    <nav className={classes.wrapper}>
      <MyContainer>
        <Group align="center" noWrap className={classes.inner}>
          <div>
            <NavItem href="/">
              <Title order={5}>اكاديمية وليد</Title>
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
      </MyContainer>
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
