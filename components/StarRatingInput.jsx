import {Box} from '@mantine/core'
import {StarFilledIcon, StarIcon} from '@modulz/radix-icons'
import {useState} from 'react'

const StarRatingInput = ({ratingHandler, rating, ...props}) => {
  const [hover, setHover] = useState(0)

  return (
    <Box {...props}>
      {[...Array(5)].map((_, index) => {
        index += 1
        let star
        if (index <= (hover || rating))
          star = <StarFilledIcon color="#FDCC0D" />
        else star = <StarIcon color="#FDCC0D" />
        return (
          <button
            style={{
              backgroundColor: 'transparent',
              padding: 0,
              margin: 0,
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
            }}
            type="button"
            key={index}
            onClick={() => ratingHandler(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            {star}
          </button>
        )
      })}
    </Box>
  )
}

export default StarRatingInput
