import {View, Dimensions} from 'react-native'

import Text from '@/components/shared/Text'
import Price from '@/components/shared/Price'
import Image from '@/components/listings/Image'
import $styles from './styles'

const WIDTH = Dimensions.get('window').width - 40
const HEIGHT = WIDTH * 0.64

function FullListingCard({styles, size, images, price, address}) {
  const image = images[0] || {}
  return (
    <View style={styles.container}>
      <View style={styles.thumbnail}>
        <Image
          thumbnail
          width={WIDTH * size}
          height={HEIGHT * size}
          style={styles.image}
          {...image}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.street} numberOfLines={1} ellipsizeMode="tail">
            {address.street}
          </Text>
          {size > 0.5 && (
            <Text style={styles.neighborhood}>
              {address.neighborhood.toUpperCase()}
            </Text>
          )}
        </View>
        <Price styles={{text: styles.priceText}} size={Math.max(17, 22 * size)}>
          {price}
        </Price>
      </View>
    </View>
  )
}

FullListingCard.defaultProps = {
  size: 1
}

export default $styles.inject(({size, active, primary}) => ({
  primary,
  active,
  small: size < 0.7
}))(FullListingCard)
