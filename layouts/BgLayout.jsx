import {Box} from '@mantine/core'

export default function BgLayout({children}) {
  return (
    <Box
      sx={theme => ({
        minHeight: '75vh',
        display: 'flex',
        flexDirection: 'column',
        align: 'stretch',
        backgroundColor:
          theme.colorScheme === 'light'
            ? theme.colors.gray[0]
            : theme.colors.dark[6],
        '& > *': {
          flexGrow: 2,
        },
      })}
    >
      {children}
    </Box>
  )
}
