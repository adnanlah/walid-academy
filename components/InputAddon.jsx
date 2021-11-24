import {Box, Group, TextInput} from '@mantine/core'
import {Children} from 'react'

const InputAddon = ({children, ...props}) => {
  const childrenCount = Children.toArray(children).length
  return (
    <Box style={{position: 'relative'}}>
      <TextInput
        {...props}
        styles={theme => {
          return children
            ? {
                input: {
                  paddingLeft: childrenCount * theme.spacing.lg * 2,
                },
              }
            : {}
        }}
      />
      {children && (
        <Group
          spacing={0}
          style={{
            position: 'absolute',
            left: 5,
            bottom: 0,
            height: '100%',
          }}
        >
          {children}
        </Group>
      )}
    </Box>
  )
}

export default InputAddon
