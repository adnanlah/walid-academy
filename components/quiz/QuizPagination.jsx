import {ActionIcon, Box, Group} from '@mantine/core'
import {usePagination, useWindowScroll} from '@mantine/hooks'
import {DotFilledIcon, DotIcon} from '@modulz/radix-icons'

const Quizpagination = ({total, activePage, onChange}) => {
  const [scroll, scrollTo] = useWindowScroll()
  const pagination = usePagination({
    total,
    siblings: total,
    initialPage: activePage,
    onChange: onChange,
  })

  const onClickHandler = i => {
    scrollTo({y: 0})
    pagination.setPage(i)
  }

  const dotsList = pagination.range.map((i, idx) => {
    return (
      <ActionIcon key={i} onClick={() => onClickHandler(i)}>
        {i === pagination.active && (
          <DotFilledIcon style={{width: 30, height: 30}} />
        )}
        {i !== pagination.active && (
          <DotIcon style={{DotIcon: 30, height: 30}} />
        )}
      </ActionIcon>
    )
  })

  return (
    <div>
      <Group spacing="xs">{dotsList}</Group>
    </div>
  )
}

export default Quizpagination
