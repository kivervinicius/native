import {View, Text} from 'react-native'

import {responsive} from '@/components/shared/Orientation'
import Price from '@/components/shared/Price'
import Image from '@/components/listings/Image'
import styles from './styles'

function ListingCard({images, price, address, dimensions}) {
  const image = images[0] || {}
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          thumbnail
          width={dimensions.width - 40}
          style={styles.image}
          {...image}
        />
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

export default responsive()(ListingCard)
