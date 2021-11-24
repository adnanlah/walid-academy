import {Button, Checkbox, Textarea, TextInput, Title} from '@mantine/core'
import {useForm} from '@mantine/hooks'
const Chapterform = ({handler, chapter}) => {
  const form = useForm({
    initialValues: chapter
      ? chapter
      : {
          name: '',
        },
  })
  return (
    <div>
      <Title order={4}>شابتر جديد</Title>
      <form onSubmit={form.onSubmit(values => handler(values))}>
        <TextInput
          label="غنوان الشابتر"
          value={form.values.name}
          onChange={event =>
            form.setFieldValue('name', event.currentTarget.value)
          }
        />

        <Button type="submit">اضف</Button>
      </form>
    </div>
  )
}

export default Chapterform
