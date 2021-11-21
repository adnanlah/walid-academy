import {Box} from '@mantine/core'

export default function MyContainer({padding, ...props}) {
  const [py = 0, px = 0] = padding
    ? padding.split(' ').map(p => (p === '0' ? 0 : p))
    : [0, 0]

  return (
    <Box
      sx={theme => ({
        padding: padding
          ? `${py ? theme.spacing[py] : 0}px ${px ? theme.spacing[px] : 0}px`
          : 0,
        width: `60%`,
        margin: `0 auto`,
      })}
      {...props}
    >
      {props.children}
    </Box>
  )
}
