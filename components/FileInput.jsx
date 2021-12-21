import {Badge, Box, Button, Group} from '@mantine/core'
import {useState} from 'react'

const Fileinput = ({color = 'dark', buttonContent, value, onChange}) => {
  const items = []
  for (const prop in value) {
    items.push(
      <Badge key={`${prop}-${value[prop].name}`} color="gray" radius="xs">
        {value[prop].name}
      </Badge>,
    )
  }

  return (
    <Box>
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
            onChange={event => onChange(event.target.files)}
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
