import Layout from '../../components/Layout'
import ContentLayout from '../../components/ContentLayout'
import MyContainer from '../../components/MyContainer'
import FlashcardCard from '../../components/FlashcardCard'

import {
  Box,
  TextInput,
  Button,
  Title,
  Group,
  ActionIcon,
  Badge,
  Text,
  Pagination,
  Center,
  Grid,
  Col,
} from '@mantine/core'
import {useForm} from '@mantine/hooks'
import {Cross1Icon, MagnifyingGlassIcon} from '@modulz/radix-icons'
import CoursesShowcase from '../../components/CoursesShowcase'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import SearchFilter from '../../components/SearchFilter'

const RemoveButton = props => (
  <ActionIcon
    {...props}
    size="xs"
    color="blue"
    radius="xl"
    variant="transparent"
  >
    <Cross1Icon style={{width: 10, height: 10}} />
  </ActionIcon>
)

const gradesData = [
  {value: '3rd-highschool', label: 'سنة ثالثة ثانوي'},
  {value: '4th-middleschool', label: 'سنة ثانية ثانوي'},
]

const branchsData = [
  {value: 'math', label: 'شعبة رياضيات'},
  {value: 'management', label: 'شعبة تسيير واقتصاد'},
  {value: 'science', label: 'شعبة علوم طبيعة وحياة'},
]

const subjectsData = [
  {value: 'math', label: 'رياضيات'},
  {value: 'physics', label: 'فيزياء'},
  {value: 'science', label: 'علوم الطبيعة والحياة'},
]

const typesData = [
  {value: 'courses', label: 'دروس'},
  {value: 'flashcards', label: 'بطاقات الاستذكار'},
]

export default function Search() {
  const [subjects, setSubjects] = useState([])
  const [branchs, setBranchs] = useState([])
  const [grades, setGrades] = useState([])
  const [type, setType] = useState('')

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

  useEffect(() => {
    // if no query -> request the best of
    // if quert -> request the query

    // if multiple types show them seperate
    // if one type expand

    console.log('sending a request')
    return () => {
      console.log('clean any leakage')
    }
  }, [subjects])

  const filtersList = (
    <Group>
      {grades.map((grade, idx) => (
        <Badge
          radius="xs"
          key={`${idx}-${grade}`}
          color="gray"
          size="md"
          rightSection={
            <RemoveButton
              onClick={() => setGrades(sub => sub.filter(s => s !== grade))}
            />
          }
        >
          {gradesData.filter(s => s.value === grade)[0].label}
        </Badge>
      ))}
      {branchs.map((branch, idx) => (
        <Badge
          radius="xs"
          key={`${idx}-${branch}`}
          color="gray"
          size="md"
          rightSection={
            <RemoveButton
              onClick={() => setBranchs(sub => sub.filter(s => s !== branch))}
            />
          }
        >
          {branchsData.filter(s => s.value === branch)[0].label}
        </Badge>
      ))}
      {subjects.map((subject, idx) => (
        <Badge
          radius="xs"
          key={`${idx}-${subject}`}
          color="gray"
          size="md"
          rightSection={
            <RemoveButton
              onClick={() => setSubjects(sub => sub.filter(s => s !== subject))}
            />
          }
        >
          {subjectsData.filter(s => s.value === subject)[0].label}
        </Badge>
      ))}
      {!!type && (
        <Badge
          radius="xs"
          color="gray"
          size="md"
          rightSection={<RemoveButton onClick={() => setType('')} />}
        >
          {typesData.filter(t => t.value === type)[0].label}
        </Badge>
      )}
      <Text
        variant="link"
        color="dark"
        style={{cursor: 'pointer'}}
        onClick={() => {
          setGrades([])
          setBranchs([])
          setSubjects([])
          setType('')
        }}
      >
        احذف الكل
      </Text>
    </Group>
  )

  return (
    <div>
      <Box
        component="section"
        sx={theme => ({
          backgroundColor:
            theme.colorScheme === 'light'
              ? theme.colors.cyan[9]
              : theme.colors.dark[9],

          padding: `${theme.spacing.xl}px 0 ${theme.spacing.md}px`,
          boxShadow: theme.shadows.xs,
        })}
      >
        <MyContainer>
          <form onSubmit={form.onSubmit(onSearchSubmit)}>
            <Group align="end" mb="md" spacing="xs">
              <TextInput
                size="md"
                style={{
                  flexGrow: 1,
                }}
                icon={<MagnifyingGlassIcon />}
                label="ابحث في الموقع"
                placeholder="ابحث في الموقع"
                {...form.getInputProps('query')}
              />
              <Button color="dark" size="md" type="submit">
                ابحث
              </Button>
            </Group>
            <Group>
              <SearchFilter
                placeholder="السنة الدراسية"
                data={gradesData}
                values={grades}
                handle={value => setGrades(v => [...v, value])}
              />
              <SearchFilter
                placeholder="الشعبة"
                data={branchsData}
                values={branchs}
                handle={value => setBranchs(v => [...v, value])}
              />
              <SearchFilter
                placeholder="المادة"
                data={subjectsData}
                values={subjects}
                handle={value => setSubjects(v => [...v, value])}
              />
              <SearchFilter
                placeholder="نوع"
                data={typesData}
                values={subjects}
                handle={value => setType(value)}
              />
            </Group>
          </form>
          {!!(
            type.length ||
            grades.length ||
            branchs.length ||
            subjects.length
          ) && <Box mt="md">{filtersList}</Box>}
        </MyContainer>
      </Box>
      <MyContainer sx={theme => ({padding: `${theme.spacing.xl}px 0`})}>
        <Box>
          {/* If type is not set show multiple tabs */}
          {!type && (
            <>
              <Box mb="xl">
                <Group mb="md" position="apart">
                  <Title order={3}>الدروس ({12})</Title>
                  <Text
                    variant="link"
                    color="dark"
                    style={{cursor: 'pointer'}}
                    onClick={() => {
                      setType('courses')
                    }}
                  >
                    شاهد (20)
                  </Text>
                </Group>
                <Box>
                  <CoursesShowcase
                    api={`https://my.backend/courses?query=${queryValue}`}
                  />
                </Box>
              </Box>
              <Box>
                <Group mb="md" position="apart">
                  <Title order={3}>بطاقات الاستذكار ({12})</Title>
                  <Text
                    variant="link"
                    color="dark"
                    style={{cursor: 'pointer'}}
                    onClick={() => {
                      setType('courses')
                    }}
                  >
                    شاهد المزيد{' >>'}
                  </Text>
                </Group>
                <Box>
                  <CoursesShowcase
                    api={`https://my.backend/courses?query=${queryValue}`}
                  />
                </Box>
              </Box>
            </>
          )}
          {/* If Type is set, expand the search results */}
          {/* If type is courses */}
          {!!(type.length && type === 'courses') && (
            <>
              <Group mb="md" position="apart">
                <Title order={3}>الدروس ({12})</Title>
                <Pagination></Pagination>
              </Group>
              <Box>
                <CoursesShowcase
                  mb="md"
                  api={`https://my.backend/courses?query=${queryValue}`}
                />
                <Center>
                  <Pagination></Pagination>
                </Center>
              </Box>
            </>
          )}
          {/* If type is flashcards */}
          {!!(type.length && type === 'flashcards') && (
            <>
              <Group mb="md" position="apart">
                <Title order={3}>بطاقات الاستذكار ({12})</Title>
                <Pagination></Pagination>
              </Group>
              <Box>
                <Grid columns={12} mb="md">
                  {[...Array(10)].map((_, idx) => (
                    <Col key={idx} span={3}>
                      <FlashcardCard />
                    </Col>
                  ))}
                </Grid>
                <Center>
                  <Pagination></Pagination>
                </Center>
              </Box>
            </>
          )}
        </Box>
      </MyContainer>
    </div>
  )
}

Search.getLayout = function getLayout(page) {
  return (
    <Layout>
      <ContentLayout>{page}</ContentLayout>
    </Layout>
  )
}
