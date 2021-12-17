import {
  Anchor,
  Box,
  Center,
  Group,
  Switch,
  Text,
  useMantineColorScheme,
} from '@mantine/core'
import {lorem} from '../util/helpers'

const FooterLink = ({children, href, ...props}) => {
  return (
    <Box {...props}>
      <Anchor
        href={href}
        variant="text"
        sx={theme => ({
          color:
            theme.colorScheme === 'light' ? theme.colors.gray[0] : undefined,
        })}
      >
        {children}
      </Anchor>
    </Box>
  )
}

export default function Footer() {
  const {colorScheme, toggleColorScheme} = useMantineColorScheme()
  // const dark = colorScheme === 'dark'

  return (
    <Box
      sx={theme => ({
        padding: `5% 15%`,
        background:
          theme.colorScheme === 'light'
            ? theme.colors.indigo[9]
            : theme.colors.dark[9],
      })}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Group position="apart" align="start" style={{marginBottom: '10%'}}>
          <div>
            <FooterLink href="#">{lorem(3)}</FooterLink>
          </div>
          <div>
            <FooterLink href="#" mb="md">
              {lorem(3)}
            </FooterLink>
            <FooterLink href="#" mb="md">
              {lorem(3)}
            </FooterLink>
            <FooterLink href="#" mb="md">
              {lorem(3)}
            </FooterLink>
          </div>
          <div>
            <FooterLink href="#" mb="md">
              {lorem(3)}
            </FooterLink>
            <FooterLink href="#" mb="md">
              {lorem(3)}
            </FooterLink>
            <FooterLink href="#" mb="md">
              {lorem(3)}
            </FooterLink>
            <FooterLink href="#">{lorem(3)}</FooterLink>
          </div>
        </Group>
        <Box>
          <Switch
            size="xl"
            label="Right to Left"
            onChange={() => toggleColorScheme()}
            color="dark"
          />
        </Box>
      </div>
    </Box>
  )
}
