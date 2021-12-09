import {Box} from '@mantine/core'

export default function ContentLayout({children}) {
  return (
    <Box
      sx={theme => ({
        minHeight: '60vh',
        backgroundColor:
          theme.colorScheme === 'light'
            ? theme.colors.gray[0]
            : theme.colors.dark[6],
      })}
    >
      {children}
    </Box>
  )
}
