import {createStyles} from '@mantine/core'

const useStyles = createStyles(theme => {
  return {
    video: {
      height: '100%',
      backgroundColor: `black`,
    },
  }
})

export default function VideoModal() {
  const {classes} = useStyles()
  return <article className={classes.video}></article>
}
