import {View, Text, Dimensions} from 'react-native'

import Image from '../Image'

const imageWidth = Math.min(400, Dimensions.get('window').width - 50)

export default function ListingCard({images, ...props}) {
  const image = images[0] || {}
  return (
    <View>
      <Image thumbnail width={imageWidth} {...image} />
      <Text>{console.log(props)}</Text>
    </View>
  )
}
