import {View, Text, Dimensions} from 'react-native'

import Price from '@/components/shared/Price'
import Image from '@/components/listings/Image'
import $styles from './styles'

const WIDTH = Dimensions.get('window').width - 40
const HEIGHT = WIDTH * 0.64

function FullListingCard({styles, images, price, address, description}) {
  const image = images[0] || {}
  return (
    <View style={styles.container}>
      <View style={styles.thumbnail}>
        <Image
          thumbnail
          width={WIDTH}
          height={HEIGHT}
          style={styles.image}
          {...image}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.street} numberOfLines={1} ellipsizeMode="tail">
            {address.street}
          </Text>
          <Text style={styles.neighborhood}>
            {address.neighborhood.toUpperCase()}
          </Text>
        </View>
        <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
          {description}
        </Text>
        <Price styles={{text: styles.priceText}} size={22}>
          {price}
        </Price>
      </View>
    </View>
  )
}

export default $styles.inject(FullListingCard)
