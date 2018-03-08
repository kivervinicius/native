import {View, Text, Dimensions} from 'react-native'

import Price from '@/components/shared/Price'
import Image from '../Image'
import styles from './styles'

const imageWidth = Math.min(400, Dimensions.get('window').width - 40)

export default function ListingCard({images, price, address}) {
  const image = images[0] || {}
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image thumbnail width={imageWidth} {...image} />
      </View>
      <View style={styles.body}>
        <Price size={22}>{price}</Price>
        <Text style={styles.address}>{address.street}</Text>
        <Text style={[styles.address, styles.neighborhood]}>
          {address.neighborhood.toUpperCase()}
        </Text>
      </View>
    </View>
  )
}
