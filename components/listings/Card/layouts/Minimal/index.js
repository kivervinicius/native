import {View, Dimensions} from 'react-native'

import Text from '@/components/shared/Text'
import Price from '@/components/shared/Price'
import Image from '@/components/listings/Image'
import styles from './styles'

const WIDTH = Dimensions.get('window').width - 40

export default function ListingCard({images, price, address}) {
  const image = images[0] || {}
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image thumbnail width={WIDTH} style={styles.image} {...image} />
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
