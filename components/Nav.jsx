import Link from 'next/link'

import {createStyles, Autocomplete, Button, Title, Divider} from '@mantine/core'

import {MagnifyingGlassIcon} from '@modulz/radix-icons'

const useStyles = createStyles(theme => {
  return {
    wrapper: {
      padding: `${theme.spacing.xs}px  15%`,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'red',
      boxShadow: theme.shadows.xs,
      position: `relative`,
      '& > div': {
        flexGrow: 1,
      },
    },
    logo: {
      fontWeight: 'bold',
      textAlign: 'center',
    },
    navLinks: {
      display: 'flex',
      alignItems: 'center',
    },
    navLinksStart: {
      justifyContent: 'flex-end',
      color: 'red',
    },
    navLinksEnd: {
      justifyContent: 'flex-start',
      color: 'blue',
    },
    navLink: {
      margin: `0 ${theme.spacing.sm}px`,
      textDecoration: 'none',
    },
  }
})

function Nav() {
  const {classes, cx} = useStyles()

  return (
    <nav className={classes.wrapper}>
      <div className={cx(classes.navLinks, classes.navLinksEnd)}>
        <Link href="/courses">
          <a className={classes.navLink}>الدروس</a>
        </Link>
        <Autocomplete
          styles={{
            input: {
              textAlign: 'right',
            },
            item: {
              textAlign: 'right',
            },
          }}
          icon={<MagnifyingGlassIcon />}
          placeholder="ابحث في الموقع"
          data={['React', 'Angular', 'Svelte', 'Vue']}
        />
      </div>

      <div className={classes.logo}>
        <Link href="/">
          <a className={classes.navLink}>
            <Title order={3}>اكاديمية وليد</Title>
          </a>
        </Link>
      </div>

      <div className={cx(classes.navLinks, classes.navLinksStart)}>
        <Link href="/courses">
          <a className={classes.navLink}>المنتدى</a>
        </Link>

        <Divider orientation="vertical" mx="xs" size="xs" />

        <Link href="/courses">
          <a className={classes.navLink}>تسحيل دخول</a>
        </Link>
        <Button color="dark">ابدا من هنا</Button>
      </div>
    </nav>
  )
}

export default Nav
