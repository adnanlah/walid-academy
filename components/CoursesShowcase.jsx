import {Box, Grid, Col, Pagination, Center, LoadingOverlay} from '@mantine/core'
import CourseCard from './CourseCard'
import {useState} from 'react'
import useSWR from 'swr'
async function fetcher(url) {
  const res = await fetch(url)
  const json = await res.json()
  return json
}

export default function CoursesShowcase(props) {
  console.log('rendering CoursesShowcase ', props.api)
  const [activePage, setPage] = useState(1)

  const {data, error} = useSWR(`${props.api}?limit=10&start=1`, fetcher)

  if (error) return <Center>فشل في التحميل</Center>

  const setChange = page => {
    setPage(page)
  }

  const CoursesList = data?.map((course, idx) => {
    return (
      <Col key={`${course.title}-${idx}`} span={3}>
        <CourseCard {...course} />
      </Col>
    )
  })

  return (
    <Box>
      <LoadingOverlay visible={!data} />
      <Box mb="md">
        <Grid columns={12}>{CoursesList}</Grid>
      </Box>

      <Center>
        <Pagination total={5} page={activePage} onChange={setChange} />
      </Center>
    </Box>
  )
}
