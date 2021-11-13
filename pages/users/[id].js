/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'

export default function Course({course}){
  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>Id: {course.id}</h1>
      <h1>Course title: {course.title}</h1>
    </div>
  );
}

export async function getServerSideProps({params, res}) {
  const response = await fetch(`https://my.backend/course/${params.id}`)
  
  if (!response.ok) {
    // res.writeHead(302, {
    //   Location: '/courses'
    // })
    // res.end()
    return {
      redirect: {
        destination: '/courses',
        permanent: false,
      },
    }
  }

  const data = await response.json()

  return {
    props: {
      course: data
    }
  }
}