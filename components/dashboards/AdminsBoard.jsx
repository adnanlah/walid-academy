import {Autocomplete, Divider, Title} from '@mantine/core'
import {useDebouncedValue} from '@mantine/hooks'
import {useEffect, useState} from 'react'
import UserBadge from './UserBadge'

const Adminsboard = () => {
  const [value, setValue] = useState('')
  const [results, setResults] = useState([])
  const [debounce] = useDebouncedValue(value, 300)

  useEffect(() => {
    const data = ['Ahmed', 'Adnan', 'Omar']
    if (debounce === '') return setResults([])
    const filteredArray = data.filter(option => {
      return option.toString().toLowerCase().indexOf(debounce) >= 0
    })
    setResults(filteredArray)
  }, [debounce])

  const removeHandler = id => alert('removing', id)

  return (
    <div>
      <Title order={4} mb="xl">
        تسيير المستخدمين
      </Title>
      <div>
        <Title order={6} mb="xl">
          المستخدمين ذات صلاحيات الاستاذ
        </Title>
        <Autocomplete
          mb="xl"
          label="أضف استاذ"
          placeholder="Pick one"
          value={value}
          onChange={setValue}
          data={results}
        />
        <div>
          <UserBadge removeHandler={removeHandler}>محمد علي</UserBadge>
          <UserBadge removeHandler={removeHandler}>محمد علي</UserBadge>
          <UserBadge removeHandler={removeHandler}>محمد علي</UserBadge>
        </div>
      </div>
      <Divider my="xl" />
      <div>
        <Title order={6} mb="xl">
          المستخدمين ذات صلاحيات الادمين
        </Title>
        <Autocomplete
          mb="xl"
          label="أضف استاذ"
          placeholder="Pick one"
          value={value}
          onChange={setValue}
          data={results}
        />
        <div>
          <UserBadge removeHandler={removeHandler}>محمد علي</UserBadge>
          <UserBadge removeHandler={removeHandler}>محمد علي</UserBadge>
          <UserBadge removeHandler={removeHandler}>محمد علي</UserBadge>
        </div>
      </div>
    </div>
  )
}

export default Adminsboard
