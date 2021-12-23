import {
  Anchor,
  Button,
  Center,
  PasswordInput,
  TextInput,
  Title,
} from '@mantine/core'
import {useForm, useLocalStorageValue} from '@mantine/hooks'
import Link from 'next/link'

const LoginForm = ({closeModal}) => {
  const [value, setValue] = useLocalStorageValue({
    key: 'is-authenticated',
    defaultValue: false,
  })

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validationRules: {
      email: value => /^\S+@\S+$/.test(value),
    },
  })

  const login = ({email}) => {
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email}),
    }

    fetch('https://my.backend/login', requestOptions)
      .then(response => response.json())
      .then(res => {
        if (res.email) {
          setValue(true)
        }

        return res.data
      })
  }

  return (
    <form onSubmit={form.onSubmit(login)}>
      <Title align="center" mb="xl" order={3}>
        تسجيل دخول
      </Title>
      <TextInput
        data-autofocus
        mb="xs"
        required
        label="الايميل"
        placeholder="your@email.com"
        {...form.getInputProps('email')}
      />

      <PasswordInput
        mb="xl"
        required
        label="كلمة السر"
        {...form.getInputProps('password')}
      />

      <Button type="submit" fullWidth mb="xs">
        تسجيل دخول
      </Button>

      <div>
        <Center mb="xs">
          <Link href="/signup" passHref>
            <Anchor
              align="center"
              color="dimmed"
              onClick={() => {
                closeModal()
              }}
            >
              نسيت رقمك السري؟
            </Anchor>
          </Link>
        </Center>
        <Center mb="xs">
          <Link href="/signup" passHref>
            <Anchor
              weight={700}
              align="center"
              color="dimmed"
              onClick={() => {
                closeModal()
              }}
            >
              سجل الان
            </Anchor>
          </Link>
        </Center>
      </div>
    </form>
  )
}

export default LoginForm
