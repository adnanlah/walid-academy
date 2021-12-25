import {
  Anchor,
  Button,
  Center,
  PasswordInput,
  TextInput,
  Title,
} from '@mantine/core'
import {useForm} from '@mantine/hooks'
import {useEffect} from 'react'
import Link from 'next/link'
import {login} from 'hooks/auth'
import useUser from 'hooks/useUser'
const LoginForm = ({closeModal}) => {
  const {user, mutate, loggedOut} = useUser()
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validationRules: {
      email: value => /^\S+@\S+$/.test(value),
    },
  })

  useEffect(() => {
    if (user && !loggedOut) {
      closeModal()
    }
  }, [closeModal, loggedOut, user])

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        login()
        mutate()
      }}
    >
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
