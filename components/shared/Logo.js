import {Image} from 'react-native'

const WIDTH = 264
const HEIGHT = 72

export default function Logo({width, height, style, ...props}) {
  const newStyle = Object.assign(
    {
      width,
      height
    },
    style || {}
  )
  if (height) newStyle.width = WIDTH * height / HEIGHT
  else if (width) newStyle.height = HEIGHT * width / WIDTH
  return (
    <Image
      {...props}
      style={newStyle}
      source={require('@/assets/img/logo.png')}
    />
  )
}
