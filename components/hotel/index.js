import Image from 'components/image'

export default function Hotel({ hotel: { src, name } }) {
  return (
    <Image
      src={src}
      shadow
      margin={0}
      noBorder
      oversize={false}
      layout="responsive"
      width={3000 / 2.75}
      height={2000 / 2.75}
      alt={`${name} Image`}
    />
  )
}
