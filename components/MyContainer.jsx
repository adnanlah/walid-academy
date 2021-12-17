import {Box} from '@mantine/core'
import {createStyles} from '@mantine/styles'

const useStyles = createStyles((theme, {pt, pr, pb, pl}) => {
  return {
    pad: {
      paddingTop: pt ? `${theme.spacing[pt]}px` : undefined,
      paddingRight: pr ? `${theme.spacing[pr]}px` : undefined,
      paddingBottom: pb ? `${theme.spacing[pb]}px` : undefined,
      paddingLeft: pl ? `${theme.spacing[pl]}px` : undefined,
    },
  }
})

export default function MyContainer({
  pt = 0,
  pr = 0,
  pb = 0,
  pl = 0,
  py = 0,
  px = 0,
  children,
  ...restProps
}) {
  const {classes} = useStyles({
    pt: pt ? pt : py,
    pr: pr ? pr : px,
    pb: pb ? pb : py,
    pl: pl ? pl : px,
  })

  return (
    <Box
      className={classes.pad}
      style={{width: `60%`, margin: `0 auto`}}
      {...restProps}
    >
      {children}
    </Box>
  )
}
