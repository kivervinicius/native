import {Image} from 'react-native'
import PhotoView from 'react-native-photo-view'

import * as image from '@/assets/image'

export default function ListingImage({
  scalable,
  filename,
  thumbnail,
  width,
  height,
  style,
  ...props
}) {
  const imageStyle = scalable
    ? {position: 'absolute', width: '100%', height: '100%'}
    : ListingImage.ratio({width, height})
  const Component = scalable ? PhotoView : Image
  if (scalable) props.minimumZoomScale = props.minimumZoomScale || 1
  return (
    <Component
      {...props}
      style={[imageStyle, style]}
      source={{uri: ListingImage.url(filename, {thumbnail, width, height})}}
    />
  )
}

ListingImage.ratio = image.withRatio({width: 400, height: 200})

ListingImage.url = (
  filename = 'default_w4ki8j.jpg',
  {thumbnail, width, height}
) => {
  let options
  if (width && height) options = {width, height}
  else if (thumbnail) options = {width: 400, height: 200}
  else options = {width: 600, height: 400}
  return image.url(filename, options)
}
