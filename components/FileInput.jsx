import {Badge, Box, Button, Group} from '@mantine/core'
import {useSetState} from '@mantine/hooks'
import React from 'react'

const Fileinput = ({color = 'dark', buttonContent, ...props}) => {
  const [files, setFiles] = useSetState(null)

  const items = []
  for (const prop in files) {
    items.push(
      <Badge color="gray" radius="xs">
        {files[prop].name}
      </Badge>,
    )
  }

  return (
    <Box {...props}>
      <Group>
        <div>
          <label htmlFor="file-upload">
            <Button color={color} component="div">
              {buttonContent}
            </Button>
          </label>
          <input
            id="file-upload"
            style={{display: 'none'}}
            type="file"
            multiple
            accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/*,video/*,.pdf"
            onChange={event => setFiles(event.target.files)}
          />
        </div>
        <div>
          <Group>{items}</Group>
        </div>
      </Group>
    </Box>
  )
}

export default Fileinput
