import {Button, TextInput} from '@mantine/core'
import {useForm} from '@mantine/hooks'
const Chapterform = ({handler, chapter}) => {
  const form = useForm({
    initialValues: chapter
      ? chapter
      : {
          name: '',
        },
    validationRules: {
      name: v => v.length > 0,
    },
  })
  return (
    <div>
      <form onSubmit={form.onSubmit(values => handler(values))}>
        <TextInput
          data-autofocus
          mb="xs"
          label="غنوان الشابتر"
          value={form.values.name}
          error={form.errors.name && 'Insert a name'}
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
