/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

export default function Courses({courses}) {
  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>My Courses</h1>

      <div sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
        {courses.map(course => (
          <div sx={{width: '33%', p: 2}} key={course.id}>
            <Link key={course.id} href="/courses/[id]" as={`/courses/${course.id}`}>
              <a sx={{textDecoration: 'none', cursor: 'pointer'}}>
                <div sx={{variant: 'containers.card',}}>
                  <strong>{course.title}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps({res}) {
  const response = await fetch('https://my.backend/courses');

  // console.log('response: ', response.status, response.ok, response.statusText)

  if (!response.ok) {
    res.writeHead(302, {
      Location: '/'
    })
    res.end()
    return {
      props: {
        courses: []
      }
    }
  }

  const data = await response.json();

  return {
    props: {
      courses: data
    }
  }
}