import {
  Button,
  Col,
  Divider,
  Grid,
  Group,
  NumberInput,
  TextInput,
  Title,
} from '@mantine/core'
import {useForm} from '@mantine/hooks'
import {DatePicker} from '@mantine/dates'
import Coupon from '../Coupon'
import {useState} from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/ar-dz'

const Couponsboard = () => {
  const [expireDate, onExpireDateChange] = useState(new Date())

  const form = useForm({
    initialValues: {
      name: '',
      discount: 1,
      maxusage: '',
    },

    validationRules: {
      name: n => n.length > 0,
      discount: n => parseInt(n) > 0,
      maxusage: n => parseInt(n) > 0,
    },
  })
  return (
    <div>
      <Title order={4} mb="xl">
        تسيير الكوبونات
      </Title>
      <form onSubmit={form.onSubmit(values => console.log(values))}>
        <Group align="end" mb="xs">
          <TextInput
            required
            label="اسم الكوبون"
            {...form.getInputProps('name')}
          />
          <NumberInput
            defaultValue={1}
            min={1}
            max={100}
            required
            label="التخفيض"
            {...form.getInputProps('discount')}
          />
          <NumberInput
            label="عدد الاستعمالات"
            {...form.getInputProps('maxusage')}
          />
          <DatePicker
            required
            label="تاريخ انتهاء الصلاخية"
            locale="ar-dz"
            value={expireDate}
            onChange={onExpireDateChange}
          />
        </Group>
        <Button type="submit">اضف</Button>
      </form>
      <Divider my="md" />
      <div>
        <Grid>
          <Col span={3}>
            <Coupon />
          </Col>
          <Col span={3}>
            <Coupon />
          </Col>
          <Col span={3}>
            <Coupon />
          </Col>
          <Col span={3}>
            <Coupon />
          </Col>
          <Col span={3}>
            <Coupon />
          </Col>
          <Col span={3}>
            <Coupon />
          </Col>
        </Grid>
      </div>
    </div>
  )
}

export default Couponsboard
