import {Box} from '@mantine/core'

export default function ContentLayout({children}) {
  return (
    <Box
      sx={theme => ({
        minHeight: '60vh',
        backgroundColor:
          theme.colorScheme === 'light'
            ? theme.colors.gray[1]
            : theme.colors.dark[5],
      })}
    >
      {children}
    </Box>
  )
}
