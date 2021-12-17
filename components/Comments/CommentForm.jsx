import {Button, Group, Textarea} from '@mantine/core'
import {useState} from 'react'

const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = '',
}) => {
  const [text, setText] = useState(initialText)
  const isTextareaDisabled = text.length === 0
  const onSubmit = event => {
    event.preventDefault()
    handleSubmit(text)
    setText('')
  }
  return (
    <form onSubmit={onSubmit}>
      <Textarea value={text} onChange={e => setText(e.target.value)} mb="xs" />
      <Group>
        <Button disabled={isTextareaDisabled}>{submitLabel}</Button>
        {hasCancelButton && (
          <Button type="button" color="red" onClick={handleCancel}>
            الغاء
          </Button>
        )}
      </Group>
    </form>
  )
}

export default CommentForm
