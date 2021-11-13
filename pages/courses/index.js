import Link from 'next/link'

export default function Courses({courses}) {
  return (
    <div>
      <h1>My Courses</h1>

      <div>
        {courses.map(course => (
          <div key={course.id}>
            <Link key={course.id} href="/courses/[id]" as={`/courses/${course.id}`}>
              <a>
                <div>
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