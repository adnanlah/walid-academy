import {Anchor, Box, Group, Switch, useMantineColorScheme} from '@mantine/core'
import {useEffect, useState} from 'react'
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
  const dark = colorScheme === 'dark'
  const [text5, setText5] = useState('')

  useEffect(() => {
    setText5(lorem(5))
  }, [])

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
        <Box>
          <Switch
            size="xl"
            label={dark ? 'الوضع الليلي' : 'وضغ الضوء'}
            onChange={() => toggleColorScheme()}
            color="dark"
          />
        </Box>
      </div>
    </Box>
  )
}
