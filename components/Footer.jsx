import {Anchor, Box, Group} from '@mantine/core'
import {useEffect, useState} from 'react'
import MyToggle from 'components/Elements/MyToggle'
import {lorem} from 'util/helpers'
import MyContainer from './MyContainer'

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
  const [text5, setText5] = useState('')

  useEffect(() => {
    setText5(lorem(5))
  }, [])

  return (
    <Box
      sx={theme => ({
        paddingTop: theme.spacing.xl * 2,
        background:
          theme.colorScheme === 'light'
            ? theme.colors.indigo[9]
            : theme.colors.dark[9],
      })}
    >
      <MyContainer
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'space-between',
        }}
      >
        <Group position="apart" align="start" style={{marginBottom: '10%'}}>
          <div>
            <FooterLink href="#">{text5}</FooterLink>
          </div>
          <div>
            <FooterLink href="#" mb="md">
              {text5}
            </FooterLink>
            <FooterLink href="#" mb="md">
              {text5}
            </FooterLink>
            <FooterLink href="#" mb="md">
              {text5}
            </FooterLink>
          </div>
          <div>
            <FooterLink href="#" mb="md">
              {text5}
            </FooterLink>
            <FooterLink href="#" mb="md">
              {text5}
            </FooterLink>
            <FooterLink href="#" mb="md">
              {text5}
            </FooterLink>
            <FooterLink href="#">{text5}</FooterLink>
          </div>
        </Group>
        <Group
          sx={theme => ({
            padding: `${theme.spacing.xl}px 0`,
          })}
          position="right"
        >
          <MyToggle />
        </Group>
      </MyContainer>
    </Box>
  )
}
