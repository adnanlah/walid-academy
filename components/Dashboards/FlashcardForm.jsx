import {Button, Textarea, TextInput} from '@mantine/core'
import {useForm} from '@mantine/hooks'

const FlashcardForm = ({handler, flashcard}) => {
  const form = useForm({
    initialValues: flashcard
      ? flashcard
      : {
          front: '',
          back: '',
        },
    validationRules: {
      front: v => v.length > 2,
      back: v => v.length > 2,
    },
  })

  return (
    <div>
      <form onSubmit={form.onSubmit(values => handler(values))}>
        <TextInput
          data-autofocus
          mb="xs"
          label="الجهة الامامية"
          value={form.values.front}
          error={form.errors.front && 'Insert a front'}
          onChange={event =>
            form.setFieldValue('front', event.currentTarget.value)
          }
        />
        <Textarea
          mb="xs"
          label="الجهة الخلفية"
          value={form.values.back}
          error={form.errors.back && 'Insert a back'}
          onChange={event =>
            form.setFieldValue('back', event.currentTarget.value)
          }
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}

export default FlashcardForm
