import {Image} from 'react-native'

import * as image from '@/assets/image'

const imageRatio = image.withRatio({width: 400, height: 200})

const imageUrl = (
  filename = 'default_w4ki8j.jpg',
  {thumbnail, width, height}
) => {
  let options
  if (width && height) options = {width, height}
  else if (thumbnail) options = {width: 400, height: 200}
  else options = {width: 600, height: 400}
  return image.url(filename, options)
}

export default function ListingImage({
  filename,
  thumbnail,
  width,
  height,
  style,
  ...props
}) {
  return (
    <Image
      {...props}
      style={[imageRatio({width, height}), style]}
      source={{uri: imageUrl(filename, {thumbnail, width, height})}}
    />
  )
}
