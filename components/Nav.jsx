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
} from '@mantine/core'
import {GearIcon} from '@modulz/radix-icons'
import LoginForm from './LoginForm'
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

function NavItem({href, children, ...restProps}) {
  return (
    <Box mx="xs" {...restProps}>
      <Link href={href} passHref>
        <Anchor variant="text">{children}</Anchor>
      </Link>
    </Box>
  )
}

function Nav() {
  const [opened, setOpened] = useState(false)
  const {classes, cx} = useStyles()

  return (
    <nav className={classes.wrapper}>
      <div>
        <NavItem href="/">
          <Title order={3}>اكاديمية وليد</Title>
        </NavItem>
      </div>

      <div className={cx(classes.navLinks, classes.navLinksStart)}>
        <NavItem href="/blog">المدونة</NavItem>

        <NavItem href="/forum">المنتدى</NavItem>

        <Divider orientation="vertical" size="xs" />

        <Box
          mx="xs"
          style={{cursor: 'pointer'}}
          onClick={() => setOpened(true)}
        >
          <Text>تسجيل دخول</Text>
        </Box>

        <Button color="dark">ابدا من هنا</Button>

        <NavItem href="/dashboard">
          <ActionIcon mr="md" size="lg" variant="outline">
            <GearIcon />
          </ActionIcon>
        </NavItem>
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
    </nav>
  )
}

export default Nav
