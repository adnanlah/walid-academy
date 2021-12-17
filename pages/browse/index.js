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
import {MagnifyingGlassIcon} from '@modulz/radix-icons'
import Layout from 'layouts/Layout'
import ContentLayout from 'layouts/ContentLayout'
import MyContainer from 'components/MyContainer'
import CoursesShowcase from 'components/CoursesShowcase'
import Myimage from 'components/MyImage'
import Flashcardsshowcase from 'components/FlashcardsShowcase'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import {useForm} from '@mantine/hooks'

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.q])

  return (
    <div>
      <Box
        component="header"
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
      <MyContainer component="main" py="xl">
        <Box component="section">
          <Title order={2} mb="xl">
            تصفية حسب المواد
          </Title>
          <Grid mb="xl">
            {[...Array(7)].map((_, idx) => (
              <Col span={3} key={idx}>
                <Anchor href="/">
                  <Group>
                    <Myimage
                      width={70}
                      height={70}
                      src={`/${idx + 1}.jpg`}
                      alt="Subject thumbnail"
                    />
                    <Text>الشعبة الشعبة الشعبة</Text>
                  </Group>
                </Anchor>
              </Col>
            ))}
          </Grid>
        </Box>
        <Box component="section" mb="xl">
          <Title order={2} mb="xl">
            اكتشف الدورات والبرامج
          </Title>

          <Title order={4} mb="xl">
            اكتشف الدورات والبرامج
          </Title>
          <CoursesShowcase
            mb="xl"
            pagination={false}
            api={`https://my.backend/courses?limit=4`}
          />

          <Title order={4} mb="xl">
            اكتشف الدورات والبرامج
          </Title>
          <CoursesShowcase
            pagination={false}
            api={`https://my.backend/courses?limit=4`}
          />
        </Box>
        <Box component="section">
          <Title order={2} mb="xl">
            اكتشف الدورات والبرامج
          </Title>
          <Flashcardsshowcase
            pagination={false}
            api={`https://my.backend/flashcards?limit=4`}
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
