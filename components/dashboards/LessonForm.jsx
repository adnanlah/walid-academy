import {Button, Checkbox, Textarea, TextInput} from '@mantine/core'
import {useForm} from '@mantine/hooks'

const LessonForm = ({handler, lesson}) => {
  const form = useForm({
    initialValues: lesson
      ? lesson
      : {
          title: '',
          description: '',
          videoUrl: '',
          file: '',
          free: false,
        },
    validationRules: {
      title: v => v.length > 2,
      description: v => v.length > 2,
      videoUrl: v => v.length > 2,
    },
  })

  return (
    <div>
      <form onSubmit={form.onSubmit(values => handler(values))}>
        <TextInput
          data-autofocus
          mb="xs"
          label="غنوان الدرس"
          value={form.values.title}
          error={form.errors.title && 'Insert a title'}
          onChange={event =>
            form.setFieldValue('title', event.currentTarget.value)
          }
        />
        <Textarea
          mb="xs"
          label="نبدة عن الدرس"
          value={form.values.description}
          error={form.errors.description && 'Insert a description'}
          onChange={event =>
            form.setFieldValue('description', event.currentTarget.value)
          }
        />
        <TextInput
          mb="xs"
          label="رابط الفيديو"
          value={form.values.videoUrl}
          error={form.errors.videoUrl && 'Insert a videoUrl'}
          onChange={event =>
            form.setFieldValue('videoUrl', event.currentTarget.value)
          }
        />
        {/* <Input
          type="file"
          value={form.values.file}
          onChange={event =>
            form.setFieldValue('file', event.currentTarget.value)
          }
        /> */}
        <Checkbox
          mb="xs"
          label="مجاني"
          checked={form.values.free}
          onChange={event =>
            form.setFieldValue('free', event.currentTarget.checked)
          }
        />

        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}

export default LessonForm
