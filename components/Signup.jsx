import {useForm} from '@mantine/hooks'
import {TextInput, Button, PasswordInput} from '@mantine/core'
import {LockClosedIcon} from '@modulz/radix-icons'
function Signup() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      password: '',
      termsOfService: false,
    },

    // validationRules: {
    // firstName: (value) => value.trim().length >= 2,
    //   email: value => /^\S+@\S+$/.test(value),
    // password: (value) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value),
    // },
  })
  return (
    <form onSubmit={form.onSubmit(values => console.log(values))}>
      <TextInput
        required
        label="الاسم"
        error={form.errors.name && 'Please specify valid name'}
        value={form.values.name}
        onChange={event =>
          form.setFieldValue('name', event.currentTarget.value)
        }
      />
      <TextInput
        required
        label="الايميل"
        error={form.errors.email && 'Please specify valid email'}
        value={form.values.email}
        onChange={event =>
          form.setFieldValue('email', event.currentTarget.value)
        }
      />

      <PasswordInput
        required
        label="كلمة السر"
        icon={<LockClosedIcon />}
        value={form.values.password}
        onChange={event =>
          form.setFieldValue('password', event.currentTarget.value)
        }
        onFocus={() => form.setFieldError('password', false)}
        error={
          form.errors.password &&
          'Password should contain 1 number, 1 letter and at least 6 characters'
        }
      />

      <Button type="submit">سجل</Button>
    </form>
  )
}

export default Signup
