import {createStyles} from '@mantine/core'

const useStyles = createStyles(theme => {
  return {
    wrapper: {
      background:
        theme.colorScheme === 'light'
          ? theme.colors.blue[9]
          : theme.colors.dark[9],
      height: 400,
    },
  }
})

export default function Footer() {
  const {classes} = useStyles()
  return <div className={classes.wrapper}></div>
}
