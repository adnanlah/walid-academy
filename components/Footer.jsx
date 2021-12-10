import {Anchor, Box, Grid, Group} from '@mantine/core'
import MyContainer from '../components/MyContainer'
import lorem from '../util/lorem'

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
  return (
    <Box
      sx={theme => ({
        padding: `5% 15% 10% 15%`,
        background:
          theme.colorScheme === 'light'
            ? theme.colors.indigo[9]
            : theme.colors.dark[9],
      })}
    >
      <div>
        <Group position="apart">
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
      </div>
    </Box>
  )
}
