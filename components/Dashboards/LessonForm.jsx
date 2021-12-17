import {Checkbox, Group, Textarea, TextInput, Title} from '@mantine/core'
import {FileIcon} from '@modulz/radix-icons'
import FileInput from '../FileInput'

const LessonForm = ({form}) => {
  return (
    <form>
      <Title order={4} mb="xs">
        انشاء الدرس
      </Title>
      <TextInput
        data-autofocus
        mb="xs"
        label="غنوان الدرس"
        onBlur={() => form.validateField('title')}
        {...form.getInputProps('title')}
      />
      <Textarea
        mb="xs"
        label="نبدة عن الدرس"
        {...form.getInputProps('description')}
      />
      <TextInput
        mb="xs"
        label="رابط الفيديو"
        {...form.getInputProps('videoUrl')}
      />
      <FileInput
        mb="xs"
        buttonContent={
          <Group spacing="xs">
            <FileIcon />
            <span>اضف ملحقات</span>
          </Group>
        }
      />
      <Checkbox
        label="مجاني"
        {...form.getInputProps('free', {type: 'checkbox'})}
      />
    </form>
  )
}

export default LessonForm
