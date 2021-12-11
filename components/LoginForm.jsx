import {
  Anchor,
  Box,
  Button,
  Center,
  PasswordInput,
  TextInput,
  Title,
} from '@mantine/core'
import {useForm} from '@mantine/hooks'
import Link from 'next/link'

const LoginForm = () => {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validationRules: {
      email: value => /^\S+@\S+$/.test(value),
    },
  })

  return (
    <form onSubmit={form.onSubmit(values => console.log(values))}>
      <Title align="center" mb="xl" order={3}>
        تسجيل دخول
      </Title>
      <TextInput
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

      <Button fullWidth mb="xs" type="submit">
        تسجيل دخول
      </Button>

      <div>
        <Center mb="xs">
          <Link href="/signup" passHref>
            <Anchor align="center" color="dimmed">
              نسيت رقمك السري؟
            </Anchor>
          </Link>
        </Center>
        <Center mb="xs">
          <Link href="/signup" passHref>
            <Anchor weight={700} align="center" color="dimmed">
              سجل الان
            </Anchor>
          </Link>
        </Center>
      </div>
    </form>
  )
}

export default LoginForm
