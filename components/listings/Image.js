import {Image} from 'react-native'

import * as image from '@/assets/image'

const imageRatio = image.withRatio({width: 400, height: 200})

const imageUrl = (filename = 'default_w4ki8j.jpg', thumbnail = false) => {
  return image.url(
    filename,
    thumbnail ? {width: 400, height: 200} : {width: 600, height: 400}
  )
}

export default function ListingImage({
  filename,
  thumbnail,
  width,
  height,
  ...props
}) {
  return (
    <Image
      {...props}
      style={imageRatio({width, height})}
      source={{uri: imageUrl(filename, thumbnail)}}
    />
  )
}
