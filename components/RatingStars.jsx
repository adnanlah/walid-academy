import {StarFilledIcon, StarIcon} from '@modulz/radix-icons'

export default function RatingStars({rating}) {
  const stars = []
  for (let idx = 0; idx < rating; idx++) {
    stars.push(<StarFilledIcon />)
  }
  for (let idx = 0; idx < 5 - rating; idx++) {
    stars.push(<StarIcon />)
  }
  return stars
}
