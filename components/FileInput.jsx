import {Badge, Box, Button, Group} from '@mantine/core'
import {useState} from 'react'

const Fileinput = ({buttonContent, files, handleFileInput, color = 'dark'}) => {
  const items = Array.from(files).map((file, idx) => {
    return (
      <Badge key={`${idx}-${file.name}`} color="gray" radius="xs">
        {file.name}
      </Badge>
    )
  })

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
            onChange={event => handleFileInput(event.target.files)}
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
