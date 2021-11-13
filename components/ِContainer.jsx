import {createStyles} from '@mantine/core'

const useStyles = createStyles(theme => {
  return {
    wrapper: {
      padding: `0 15%`,
    },
  }
})

export default function Container(props) {
  const {classes} = useStyles()
  return <div className={classes.wrapper}>{props.children}</div>
}
