import React from 'react'
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

export const Street = $styles.inject()(({styles, style, size, address}) => (
  <Text
    style={styles.street.concat(style, {fontSize: size})}
    numberOfLines={1}
    ellipsizeMode="tail"
  >
    {address.street}
  </Text>
))

Street.defaultProps = {
  size: 20
}

export const Neighborhood = $styles.inject()(({styles, address}) => (
  <Text style={styles.neighborhood}>{address.neighborhood.toUpperCase()}</Text>
))

export const Row = $styles.inject()(({children, styles, ...props}) => (
  <View style={styles.row}>
    {React.Children.map(children, (element) =>
      React.cloneElement(element, props)
    )}
  </View>
))
