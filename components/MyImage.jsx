import Image from 'next/image'

const Myimage = ({src, width, height, alt}) => {
  return (
    <div style={{width, height, overflow: 'hidden', position: 'relative'}}>
      <Image layout="fill" objectFit="cover" src={src} alt={alt} />
    </div>
  )
}

export default Myimage
