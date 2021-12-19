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
import BgLayout from 'layouts/BgLayout'
import MyContainer from 'components/MyContainer'
import CoursesGrid from 'components/CoursesGrid'
import Myimage from 'components/MyImage'
import FlashcardsGrid from 'components/FlashcardsGrid'
import {useForm} from '@mantine/hooks'

export default function Browse() {
  const form = useForm({
    initialValues: {
      query: '',
    },
  })

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
          <form onSubmit={form.onSubmit(values => console.log(values))}>
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
        <Box component="section" mb="xl">
          <Title order={2} mb="xl">
            تصفية حسب المواد
          </Title>
          <Grid>
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
          <CoursesGrid
            mb="xl"
            pagination={false}
            size={4}
            api={`https://my.backend/courses`}
          />

          <Title order={4} mb="xl">
            اكتشف الدورات والبرامج
          </Title>
          <CoursesGrid
            pagination={false}
            size={4}
            api={`https://my.backend/courses`}
          />
        </Box>
        <Box component="section">
          <Title order={2} mb="xl">
            اكتشف الدورات والبرامج
          </Title>
          <FlashcardsGrid
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
      <BgLayout>{page}</BgLayout>
    </Layout>
  )
}
