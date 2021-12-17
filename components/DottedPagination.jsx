import {Group} from '@mantine/core'
import {usePagination} from '@mantine/hooks'
import {DotFilledIcon, DotIcon} from '@modulz/radix-icons'

const Quizpagination = ({page, total, onChange}) => {
  // if onChange is undefined, the pagination will be unclickable and unnavigable
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
    const style = {
      cursor: onChange ? 'pointer' : undefined,
    }
    return (
      <div
        key={i}
        onClick={() => {
          if (!onChange) return
          onClickHandler(i)
        }}
        style={style}
      >
        {i === pagination.active && (
          <DotFilledIcon style={{width: 30, height: 30}} />
        )}
        {i !== pagination.active && (
          <DotIcon style={{DotIcon: 30, height: 30}} />
        )}
      </div>
    )
  })

  return (
    <div>
      <Group spacing="xs">{dotsList}</Group>
    </div>
  )
}

export default Quizpagination
