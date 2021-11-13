import {createStyles} from '@mantine/core'

const useStyles = createStyles(theme => {
  return {
    wrapper: {
      backgroundColor: theme.colors.gray[1],
    },
  }
})

export default function Layout({children}) {
  const {classes} = useStyles()
  return (
    <>
      <main className={classes.wrapper}>{children}</main>
    </>
  )
}
