import {useForm} from '@mantine/hooks'
import {
  TextInput,
  Button,
  PasswordInput,
  Select,
  Anchor,
  Col,
  Text,
  Grid,
  Box,
  Loader,
  Group,
  Image,
} from '@mantine/core'
import {createStyles} from '@mantine/styles'
import {useState, useEffect} from 'react'
import {useDebouncedValue} from '@mantine/hooks'

const useStyles = createStyles(theme => {
  return {
    customInput: {
      backgroundColor: 'transparent',
      borderColor: theme.colorScheme === 'dark' ? theme.colors.gray[6] : null,
    },
    plan: {
      borderRadius: theme.spacing.md,
      border: `1px dashed ${
        theme.colorScheme === 'light'
          ? theme.colors.gray[3]
          : theme.colors.gray[6]
      }`,
      padding: `${theme.spacing.xl}px ${theme.spacing.xs}px`,
      textAlign: 'center',
      cursor: 'pointer',
      '&:hover': {
        border: `1px solid ${theme.colors.indigo[5]}`,
      },
    },
    planSelected: {
      border: `1px solid ${theme.colors.indigo[5]}`,
    },
    strokedText: {
      position: 'relative',
      display: 'inline-block',
      '&::before': {
        content: '" "',
        width: '110%',
        position: 'absolute',

        left: '-5%',
        top: '50%',
        borderBottom: `1px solid ${theme.colors.red[9]}`,
        webkitTransform: 'skewY(-20deg)',
        transform: 'skewY(-20deg)',
      },
    },
  }
})

const Plan = ({price, oldPrice, children, selected = false, ...props}) => {
  const {classes, cx} = useStyles()
  return (
    <div
      className={cx(classes.plan, {[classes.planSelected]: selected === true})}
      {...props}
    >
      {!!oldPrice && (
        <div className={classes.strokedText}>
          <Text
            component="span"
            size="md"
            align="center"
            variant="gradient"
            gradient={{from: 'indigo', to: 'cyan', deg: 45}}
          >
            {oldPrice}{' '}
          </Text>
          <Text component="span" size="xs" color="blue" align="center">
            دج
          </Text>
        </div>
      )}
      <Box mb="xs">
        <Text
          component="span"
          size="xl"
          align="center"
          variant="gradient"
          gradient={{from: 'indigo', to: 'cyan', deg: 45}}
          weight={700}
        >
          {price}{' '}
        </Text>
        <Text component="span" color="blue" align="center">
          دج
        </Text>
      </Box>
      <div>{children}</div>
    </div>
  )
}

function SignupForm() {
  const [plan, setPlan] = useState(0)
  const [activePage, setPage] = useState(0)
  const {classes} = useStyles()
  const [validatingCoupon, setValidatingCoupon] = useState(false)

  const form = useForm({
    initialValues: {
      paymentMethod: 'dinars',
      coupon: '',
      grade: '',
      branch: '',
      firstName: '',
      middleName: '',
      lastName: '',
      wilaya: '',
      dayra: '',
      province: '',
      zipcode: '',
      phoneNumber: '',
    },

    validationRules: {
      paymentMethod: value => value,
    },
  })

  const [debounced] = useDebouncedValue(form.values.coupon, 200)

  useEffect(() => {
    // Send a request to validate the coupon
    setValidatingCoupon(true)
    return () => {
      console.log('cleaning up the request')
    }
  }, [debounced])

  return (
    <form>
      {activePage === 0 && (
        <div>
          <Text size="xl" mb="md">
            اختر اشتراك
          </Text>
          <Text mb="xs">مدة الاشتراك</Text>
          <Grid mb="xs">
            <Col span={4}>
              <Plan
                price={1900}
                onClick={() => setPlan(0)}
                selected={plan === 0}
              >
                <Text align="center">كل شهر</Text>
              </Plan>
            </Col>
            <Col span={4}>
              <Plan
                oldPrice={6500}
                price={6000}
                onClick={() => setPlan(1)}
                selected={plan === 1}
              >
                <Text align="center">كل 3 اشهر</Text>
              </Plan>
            </Col>
            <Col span={4}>
              <Plan
                price={9000}
                onClick={() => setPlan(2)}
                selected={plan === 2}
              >
                <Text align="center">كل 6 اشهر</Text>
              </Plan>
            </Col>
          </Grid>
          <Select
            mb="xs"
            classNames={{input: classes.customInput}}
            {...form.getInputProps('grade')}
            required
            label="السنة الدراسية"
            placeholder="اختر السنة الدراسية"
            data={[{value: '3rd-highschool', label: 'السنة ثالثة ثانوي'}]}
          />
          <Select
            mb="xs"
            classNames={{input: classes.customInput}}
            {...form.getInputProps('branch')}
            required
            label="الشعبة"
            placeholder="احتر الشعبة"
            data={[
              {value: 'math', label: 'شعبة رياضيات'},
              {value: 'management', label: 'شعبة تسيير واقتصاد'},
              {value: 'science', label: 'شعبة علوم طبيعة وحياة'},
            ]}
          />
          <Select
            classNames={{input: classes.customInput}}
            mb="xs"
            required
            label="طريقة الدفع"
            {...form.getInputProps('paymentMethod')}
            data={[
              {value: 'dinars', label: 'بالدينار'},
              {value: 'devise', label: 'بالعملة الصعبة'},
            ]}
          />
          <TextInput
            classNames={{input: classes.customInput}}
            mb="xs"
            label="كوبون"
            {...form.getInputProps('coupon')}
            rightSection={validatingCoupon && <Loader size="xs" />}
          />
          <Button
            onClick={() => {
              setPage(1)
            }}
          >
            المرور الى الدفع
          </Button>
        </div>
      )}
      {activePage === 1 && (
        <div>
          <Text size="xl" mb="md">
            إعداد الدفع الخاص بك
          </Text>
          <Group mb="xs" grow>
            <TextInput
              required
              classNames={{input: classes.customInput}}
              label="الاسم الاول"
              {...form.getInputProps('firstName')}
            />
            <TextInput
              required
              classNames={{input: classes.customInput}}
              label="الاسم الثاني"
              {...form.getInputProps('middleName')}
            />
          </Group>
          <TextInput
            mb="xs"
            required
            classNames={{input: classes.customInput}}
            label="اللقب"
            {...form.getInputProps('lastName')}
          />
          <TextInput
            mb="xs"
            required
            classNames={{input: classes.customInput}}
            label="الايميل"
            {...form.getInputProps('email')}
          />
          <PasswordInput
            mb="xs"
            required
            classNames={{input: classes.customInput}}
            label="رقم السر"
            {...form.getInputProps('password')}
          />
          <TextInput
            mb="xs"
            required
            classNames={{input: classes.customInput}}
            label="رقم الهاتف"
            {...form.getInputProps('phoneNumber')}
          />
          <Select
            mb="xs"
            classNames={{input: classes.customInput}}
            {...form.getInputProps('wilaya')}
            required
            label="الولاية"
            placeholder="Pick one"
            data={[
              {value: 'math', label: 'شعبة رياضيات'},
              {value: 'management', label: 'شعبة تسيير واقتصاد'},
              {value: 'science', label: 'شعبة علوم طبيعة وحياة'},
            ]}
          />
          <Group grow>
            <TextInput
              mb="xs"
              required
              classNames={{input: classes.customInput}}
              label="الدائرة"
              {...form.getInputProps('dayra')}
            />
            <TextInput
              mb="xs"
              required
              classNames={{input: classes.customInput}}
              label="البلدية"
              {...form.getInputProps('province')}
            />
          </Group>
          <TextInput
            mb="xs"
            required
            classNames={{input: classes.customInput}}
            label="رقم البريد"
            {...form.getInputProps('zipcode')}
          />
          <Text size="sm" mb="xs">
            طريقة الذقع
          </Text>
          <Group mb="xs" grow align="stretch">
            <Anchor
              href="https://www.poste.dz/"
              target="_blank"
              variant="text"
              className={classes.plan}
            >
              <div
                style={{
                  width: '50%',
                  margin: '0 auto',
                }}
              >
                <Image src="/card-edahabia.png" alt="card-edahabia" />
              </div>
              <Text mt="xs">البطاقة الذهبية</Text>
            </Anchor>
            <Anchor
              href="https://www.poste.dz/"
              target="_blank"
              variant="text"
              className={classes.plan}
            >
              <div
                style={{
                  width: '50%',
                  margin: '0 auto',
                }}
              >
                <Image src="/card-cib.png" alt="card-edahabia" />
              </div>
              <Text mt="xs">البطاقة البنكية</Text>
            </Anchor>
          </Group>
          <Group>
            <Button
              onClick={() => {
                setPage(0)
              }}
            >
              تغيير الاشتراك
            </Button>
            <Button type="submit">تسجيل</Button>
          </Group>
        </div>
      )}
    </form>
  )
}

export default SignupForm
