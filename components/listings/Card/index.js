import {View, Text} from 'react-native'

import Image from '../Image'

export default function ListingCard({images, ...props}) {
  const image = images[0] || {}
  return (
    <View>
      <Image thumbnail {...image} />
      <Text>{console.log(props)}</Text>
    </View>
  )
}
