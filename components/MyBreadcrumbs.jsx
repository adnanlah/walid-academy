import {Breadcrumbs, Anchor} from '@mantine/core'
export default function MyBreadcrumbs({links, ...props}) {
  const items = links.map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ))
  return (
    <Breadcrumbs
      separator="←"
      styles={t => ({
        breadcrumb: {
          color:
            t.colorScheme === 'light' ? t.colors.dark[9] : t.colors.dark[1],
        },
        separator: {
          color:
            t.colorScheme === 'light' ? t.colors.dark[9] : t.colors.dark[1],
        },
      })}
      {...props}
    >
      {items}
    </Breadcrumbs>
  )
}
