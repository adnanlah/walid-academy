import Layout from '../../components/Layout'
import ContentLayout from '../../components/ContentLayout'
import MyContainer from '../../components/MyContainer'
import {
  Box,
  TextInput,
  Button,
  Center,
  Paper,
  Title,
  NativeSelect,
} from '@mantine/core'
import {useForm} from '@mantine/hooks'
import {MagnifyingGlassIcon, ChevronDownIcon} from '@modulz/radix-icons'
import CoursesShowcase from '../../components/CoursesShowcase'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'

export default function Search() {
  console.log('rendering Search page')
  const [queryValue, setQueryValue] = useState('')
  const router = useRouter()
  const q = router.query.q

  const form = useForm({
    initialValues: {
      query: '',
    },
  })

  const onSearchSubmit = values => {
    const query = values.query

    window.history.replaceState(null, 'New Page Title', `/search?q=${query}`)
    setQueryValue(query)
  }

  useEffect(() => {
    form.setFieldValue('query', router.query.q)
  }, [router.query.q])

  return (
    <MyContainer padding="md">
      <Box mb="md">
        <form onSubmit={form.onSubmit(onSearchSubmit)}>
          <Center>
            <TextInput
              filled
              value={form.values.query}
              ml="xs"
              onChange={event =>
                form.setFieldValue('query', event.currentTarget.value)
              }
              styles={{
                root: {
                  textAlign: 'right',
                  width: '100%',
                },
                input: {
                  textAlign: 'right',
                },
                item: {
                  textAlign: 'right',
                },
              }}
              icon={<MagnifyingGlassIcon />}
              placeholder="ابحث في الموقع"
            />
            <Button type="submit">ابحث</Button>
          </Center>
        </form>
      </Box>
      <Paper padding="xs">
        <Box
          sx={theme => ({
            marginBottom: theme.spacing.xs,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          })}
        >
          <Title order={4}>نتائج البحث: (12)</Title>
          <NativeSelect
            data={[
              {value: 'relevant', label: 'اكثر شيوعا'},
              {value: 'recent', label: 'اخر تحديث'},
            ]}
            styles={{
              input: {
                textAlign: 'center',
              },
            }}
          />
        </Box>
        <Box>
          <CoursesShowcase
            api={`https://my.backend/courses?query=${queryValue}`}
          />
        </Box>
      </Paper>
    </MyContainer>
  )
}

Search.getLayout = function getLayout(page) {
  return (
    <Layout>
      <ContentLayout>{page}</ContentLayout>
    </Layout>
  )
}
