import {
  ActionIcon,
  Box,
  Button,
  Checkbox,
  Divider,
  Group,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core'
import {useForm} from '@mantine/hooks'
import {PlusIcon, Cross2Icon, CheckIcon} from '@modulz/radix-icons'
import {useState} from 'react'
import InputAddon from '../InputAddon'

const QuizForm = ({handler, quiz, chapterId}) => {
  const form = useForm({
    initialValues: quiz
      ? quiz
      : {
          chapterId,
          title: '',
          description: '',
          videoUrl: '',
          file: '',
          free: false,
        },
  })
  const [questions, setQuestions] = useState([
    {
      id: 1,
      content: 'السؤال الاةل هو كالتالي',
    },
  ])

  return (
    <div>
      <form onSubmit={form.onSubmit(values => handler(values))}>
        <TextInput
          mb="xs"
          label="غنوان الكويز"
          value={form.values.title}
          onChange={event =>
            form.setFieldValue('title', event.currentTarget.value)
          }
        />
        <Textarea
          mb="xs"
          label="نبدة عن الكويز"
          value={form.values.description}
          onChange={event =>
            form.setFieldValue('description', event.currentTarget.value)
          }
        />
        <Checkbox
          mb="xs"
          label="مجاني"
          checked={form.values.free}
          onChange={event =>
            form.setFieldValue('free', event.currentTarget.checked)
          }
        />
        {questions.map((question, idx) => (
          <Box key={question.id} mb="md">
            <Text mb="xs">السؤال رقم {idx}</Text>
            <InputAddon mb="xs">
              <ActionIcon variant="transparent" color="red">
                <Cross2Icon />
              </ActionIcon>
            </InputAddon>
            <Group mb="xs">
              <Divider size={15} orientation="vertical"></Divider>
              <div style={{flexGrow: 1}}>
                <Text mb="xs">الخيارات</Text>
                <InputAddon mb="xs">
                  <ActionIcon variant="transparent" color="gray">
                    <CheckIcon />
                  </ActionIcon>
                  <ActionIcon variant="transparent" color="red">
                    <Cross2Icon />
                  </ActionIcon>
                </InputAddon>
                <Button compact color="gray">
                  <Box ml="xs">
                    <PlusIcon />
                  </Box>
                  خيار جديد
                </Button>
              </div>
            </Group>
            <Button compact color="dark">
              <Box ml="xs">
                <PlusIcon />
              </Box>
              السؤال جديد
            </Button>
          </Box>
        ))}
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}

export default QuizForm
