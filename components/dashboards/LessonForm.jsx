import {Button, Checkbox, Textarea, TextInput, Title} from '@mantine/core'
import {useForm} from '@mantine/hooks'

const LessonForm = ({handler, lesson, chapterId}) => {
  const form = useForm({
    initialValues: lesson
      ? lesson
      : {
          chapterId,
          title: '',
          description: '',
          videoUrl: '',
          file: '',
          free: false,
        },
  })

  return (
    <div>
      <Title order={4}>درس جديد</Title>
      <form onSubmit={form.onSubmit(values => handler(values))}>
        <TextInput
          label="غنوان الدرس"
          value={form.values.title}
          onChange={event =>
            form.setFieldValue('title', event.currentTarget.value)
          }
        />
        <Textarea
          label="نبدة عن الدرس"
          value={form.values.description}
          onChange={event =>
            form.setFieldValue('description', event.currentTarget.value)
          }
        />
        <TextInput
          label="رابط الفيديو"
          value={form.values.videoUrl}
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
