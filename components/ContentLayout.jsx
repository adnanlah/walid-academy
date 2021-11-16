import {createStyles} from '@mantine/core'

const useStyles = createStyles(theme => {
  return {
    wrapper: {
      backgroundColor:
        theme.colorScheme === 'light'
          ? theme.colors.gray[1]
          : theme.colors.dark[5],
    },
  }
})

export default function ContentLayout({children}) {
  const {classes} = useStyles()
  return <div className={classes.wrapper}>{children}</div>
}
