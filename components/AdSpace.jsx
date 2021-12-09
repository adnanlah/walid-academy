import {Center} from '@mantine/core'
import React from 'react'

const Adspace = () => {
  return (
    <Center
      sx={theme => ({
        borderRadius: theme.radius.xl,
        border: `2px dashed ${theme.colors.gray[2]}`,
        padding: theme.spacing.xl,
      })}
    >
      مساحة اعلانية
    </Center>
  )
}

export default Adspace
