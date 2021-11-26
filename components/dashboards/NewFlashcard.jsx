import {Button, Group, Select, Textarea, TextInput, Title} from '@mantine/core'
import {useForm, useLocalStorageValue} from '@mantine/hooks'

const Newflashcard = () => {
  const [flashcardData, setFlashcardData] = useLocalStorageValue({
    key: 'flashcard-data',
    defaultValue: JSON.stringify({
      title: '',
      description: '',
      field: null,
    }),
  })

  const flashcardDataObject = JSON.parse(flashcardData)

  const form = useForm({
    initialValues: {
      title: flashcardDataObject.title,
      description: flashcardDataObject.description,
      field: flashcardDataObject.field,
    },
    validationRules: {
      title: v => v.length > 2,
      description: v => v.length > 2,
      field: v => v !== null,
    },
  })

  return (
    <div>
      <Title order={4} mb="md">
        إنشاء فلاشكارد جديد
      </Title>
      <form
        onSubmit={form.onSubmit(values => {
          console.log('submitting a new course ', values)
        })}
      >
        <TextInput
          mb="xs"
          label="غنوان الفلاشكارد"
          required
          value={form.values.title}
          error={form.errors.title && 'Insert a title'}
          onChange={event =>
            form.setFieldValue('title', event.currentTarget.value)
          }
        />
        <Textarea
          mb="xs"
          label="نبدة عن الفلاشكارد"
          required
          value={form.values.description}
          error={form.errors.description && 'Insert a description'}
          onChange={event =>
            form.setFieldValue('description', event.currentTarget.value)
          }
        />
        <Select
          mb="xs"
          label="اي مجال"
          placeholder="اختر"
          required
          value={form.values.field}
          error={form.errors.field && 'Insert a field'}
          onChange={value => form.setFieldValue('field', value)}
          data={[
            {value: 'maths', label: 'رياضيات'},
            {value: 'physics', label: 'فيزياء'},
            {value: 'biology', label: 'علوم'},
            {value: 'french', label: 'فرنسية'},
          ]}
        />

        <div>
          <Button onClick={setModalOpened(true)}>اضف</Button>
        </div>

        <Group position="right">
          <Button type="submit">اضف</Button>
        </Group>
      </form>
    </div>
  )
}

export default Newflashcard
