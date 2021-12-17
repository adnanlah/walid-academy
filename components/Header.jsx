import {Box} from '@mantine/core'
import MyContainer from './MyContainer'

const Header = ({children}) => {
  return (
    <Box
      component="header"
      sx={theme => ({
        backgroundColor:
          theme.colorScheme === 'light'
            ? theme.colors.blue[9]
            : theme.colors.dark[9],
        padding: `${theme.spacing.xl * 2}px 0`,
        boxShadow: theme.shadows.md,
      })}
    >
      <MyContainer>{children}</MyContainer>
    </Box>
  )
}

export default Header
