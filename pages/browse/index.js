import Layout from '../../components/Layout'
import ContentLayout from '../../components/ContentLayout'
import MyContainer from '../../components/MyContainer'

import {
  Box,
  TextInput,
  Button,
  Title,
  Group,
  Grid,
  Col,
  Text,
  Anchor,
} from '@mantine/core'
import {useForm} from '@mantine/hooks'
import {MagnifyingGlassIcon} from '@modulz/radix-icons'
import CoursesShowcase from '../../components/CoursesShowcase'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import Myimage from '../../components/MyImage'

export default function Browse() {
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
    <div>
      <Box
        component="section"
        sx={theme => ({
          backgroundColor:
            theme.colorScheme === 'light'
              ? theme.colors.dark[6]
              : theme.colors.dark[9],

          padding: `${theme.spacing.xl * 2}px 0`,

          boxShadow: theme.shadows.md,
        })}
      >
        <MyContainer>
          <Title style={{color: 'white'}} order={2} mb="xs">
            بناء المهارات. احصل على شهادة.
          </Title>

          <Title style={{color: 'white'}} order={2} mb="xl">
            عزز حياتك المهنية.
          </Title>
          <form onSubmit={form.onSubmit(onSearchSubmit)}>
            <Group align="start" style={{width: '50%'}}>
              <TextInput
                size="md"
                ml="xs"
                style={{
                  flexGrow: 1,
                }}
                icon={<MagnifyingGlassIcon />}
                placeholder="ابحث في الموقع"
                {...form.getInputProps('query')}
              />
              <Button size="md" type="submit">
                ابحث
              </Button>
            </Group>
          </form>
        </MyContainer>
      </Box>
      <MyContainer sx={theme => ({padding: `${theme.spacing.xl * 2}px 0`})}>
        <Box>
          <Title order={2} mb="xl">
            تصفية حسب الموضوعات الشعبية
          </Title>
          <Grid columns={12} mb="xl">
            {[...Array(8)].map((_, idx) => (
              <Col span={3} key={idx}>
                <Anchor href="/">
                  <Group>
                    <Myimage
                      width={70}
                      height={70}
                      src="/math.jpg"
                      alt="Random unsplash image"
                    />
                    <Text>علوم الطبيعة والحياة</Text>
                  </Group>
                </Anchor>
              </Col>
            ))}
          </Grid>
        </Box>
        <Box>
          <Title order={2} mb="xl">
            اكتشف الدورات والبرامج
          </Title>

          <Title order={4} mb="xl">
            اكتشف الدورات والبرامج
          </Title>
          <CoursesShowcase
            pagination={false}
            api={`https://my.backend/users/1/courses`}
          />

          <Title order={4} mb="xl">
            اكتشف الدورات والبرامج
          </Title>
          <CoursesShowcase
            pagination={false}
            api={`https://my.backend/users/1/courses`}
          />
        </Box>
        <Box>
          <Title order={2} mb="xl">
            اكتشف الدورات والبرامج
          </Title>
          <CoursesShowcase
            pagination={false}
            api={`https://my.backend/users/1/courses`}
          />
        </Box>
      </MyContainer>
    </div>
  )
}

Browse.getLayout = function getLayout(page) {
  return (
    <Layout>
      <ContentLayout>{page}</ContentLayout>
    </Layout>
  )
}
