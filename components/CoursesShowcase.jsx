import {Box, Grid, Col, Pagination, Center, LoadingOverlay} from '@mantine/core'
import CourseCard from './CourseCard'
import {useState} from 'react'
import useSWR from 'swr'

export default function CoursesShowcase({api, pagination, ...restProps}) {
  const [activePage, setPage] = useState(1)
  const {data, error} = useSWR(`${api}`)

  if (error) return <Center>فشل في التحميل</Center>

  const setChange = page => {
    setPage(page)
  }

  const CoursesList = data?.map((course, idx) => {
    return (
      <Col key={`${course.title}-${idx}`} span={3}>
        <CourseCard course={course} />
      </Col>
    )
  })

  return (
    <Box {...restProps}>
      <LoadingOverlay visible={!data} />
      <Box>
        <Grid columns={12}>{CoursesList}</Grid>
      </Box>

      {pagination && (
        <Center mt="md">
          <Pagination total={5} page={activePage} onChange={setChange} />
        </Center>
      )}
    </Box>
  )
}
