import {Box} from '@mantine/core'

export default function ContentLayout({children}) {
  return (
    <Box
      sx={theme => ({
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
