import {ActionIcon, Box, Group} from '@mantine/core'
import {usePagination} from '@mantine/hooks'
import {DotFilledIcon, DotIcon} from '@modulz/radix-icons'

const Quizpagination = ({page, total, onChange}) => {
  const pagination = usePagination({
    page,
    total,
    onChange,
    siblings: total,
  })

  const onClickHandler = i => {
    pagination.setPage(i)
  }

  const dotsList = pagination.range.map(i => {
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
