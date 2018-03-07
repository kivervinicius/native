import {Image} from 'react-native'

import {CDN_URL} from '@/lib/config'

const imageUrl = (filename = 'default_w4ki8j.jpg', thumbnail = false) => {
  const baseName = filename || 'default_w4ki8j.jpg'
  const display = thumbnail
    ? 'f_auto,c_fit,h_200,w_400'
    : 'f_auto,c_fit,h_400,w_600'
  return `${CDN_URL}/${display}/v1513818385/${baseName}`
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
      style={{position: 'relative', width: '100%'}}
      source={{uri: imageUrl(filename, thumbnail)}}
    />
  )
}
