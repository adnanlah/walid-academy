import {Select} from '@mantine/core'
import {ChevronDownIcon} from '@modulz/radix-icons'
import {useEffect, useState} from 'react'

const Searchfilter = ({data, values, handle, ...props}) => {
  return (
    <Select
      {...props}
      style={{width: '15%'}}
      rightSection={<ChevronDownIcon />}
      data={data.map(d => ({
        ...d,
        disabled: values.find(value => value === d.value) ? true : false,
      }))}
      onChange={handle}
    />
  )
}

export default Searchfilter
