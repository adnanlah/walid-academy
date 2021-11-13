import {createStyles} from '@mantine/core'

const useStyles = createStyles(theme => {
  return {
    wrapper: {
      background: theme.colors.gray[9],
      height: 400,
    },
  }
})

export default function Footer() {
  const {classes} = useStyles()
  return <div className={classes.wrapper}></div>
}
