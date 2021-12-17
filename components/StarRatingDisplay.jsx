import {StarFilledIcon, StarIcon} from '@modulz/radix-icons'

export default function StarRatingDisplay({rating}) {
  const stars = []
  for (let idx = 0; idx < rating; idx++) {
    stars.push(<StarFilledIcon key={`filled` + idx} color="#FDCC0D" />)
  }
  for (let idx = 0; idx < 5 - rating; idx++) {
    stars.push(<StarIcon key={`notfilled` + idx} color="#FDCC0D" />)
  }
  return stars
}
