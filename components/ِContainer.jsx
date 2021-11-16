import {createStyles} from '@mantine/core'

const useStyles = createStyles(theme => {
  return {
    wrapper: {
      // padding: `0 20%`,
      width: `60%`,
      margin: `0 auto`,
    },
  }
})

export default function Container(props) {
  const {classes} = useStyles()
  return (
    <div className={classes.wrapper} {...props}>
      {props.children}
    </div>
  )
}
