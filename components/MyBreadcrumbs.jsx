import {Breadcrumbs, Anchor} from '@mantine/core'
import {useCategories} from 'hooks/useCategories'

export default function MyBreadcrumbs({
  links,
  grade,
  branch,
  subject,
  ...props
}) {
  const {categories, isLoading, error} = useCategories()

  if (error) return 'error'
  if (isLoading) return 'Loading'
  const items = [
    <Anchor size="sm" color="dimmed" variant="text" href="#" key={grade}>
      {categories.grades[0].label}
    </Anchor>,
    <Anchor size="sm" color="dimmed" variant="text" href="#" key={branch}>
      {categories.branchs[0].label}
    </Anchor>,
    <Anchor size="sm" color="dimmed" variant="text" href="#" key={subject}>
      {categories.subjects[0].label}
    </Anchor>,
  ]
  return (
    <Breadcrumbs separator="←" {...props}>
      {items}
    </Breadcrumbs>
  )
}
