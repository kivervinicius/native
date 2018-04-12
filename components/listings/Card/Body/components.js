import {View} from 'react-native'

import Text from '@/components/shared/Text'
import PriceComponent from '@/components/shared/Price'
import $styles from './styles'

export const Price = $styles.inject()(({styles, price, size}) => (
  <PriceComponent styles={{text: styles.priceText}} size={size}>
    {price}
  </PriceComponent>
))

Price.defaultProps = {
  size: 26
}

export const Street = $styles.inject()(({styles, style, address}) => (
  <Text
    style={styles.street.concat(style)}
    numberOfLines={1}
    ellipsizeMode="tail"
  >
    {address.street}
  </Text>
))

export const Neighborhood = $styles.inject()(({styles, address}) => (
  <Text style={styles.neighborhood}>{address.neighborhood.toUpperCase()}</Text>
))

export const Header = $styles.inject()((props) => (
  <View style={props.styles.header}>
    <Street {...props} />
    <Neighborhood {...props} />
  </View>
))
