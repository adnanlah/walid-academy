import React from 'react'
import {ActionIcon, Anchor, Avatar, Badge} from '@mantine/core'
import {Cross1Icon} from '@modulz/radix-icons'

function UserBadge({children, removeHandler, ...props}) {
  const avatar = (
    <Avatar alt="Avatar for badge" size="md" style={{marginLeft: 5}} />
  )

  const removeButton = (
    <ActionIcon
      size="md"
      color="blue"
      radius="xl"
      variant="transparent"
      onClick={() => {
        removeHandler(1)
      }}
    >
      <Cross1Icon style={{width: 10, height: 10}} />
    </ActionIcon>
  )

  return (
    <Badge
      style={{paddingLeft: 1, paddingRight: 1, marginLeft: 10}}
      size="lg"
      leftSection={avatar}
      rightSection={removeButton}
      variant="outline"
      {...props}
    >
      <Anchor href="/">{children}</Anchor>
    </Badge>
  )
}

export default UserBadge
