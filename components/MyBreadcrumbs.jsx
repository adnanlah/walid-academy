import {Breadcrumbs, Anchor} from '@mantine/core'
export default function MyBreadcrumbs(props) {
  const items = props.items.map((item, index) => (
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
    >
      {items}
    </Breadcrumbs>
  )
}
