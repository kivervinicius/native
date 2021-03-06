import React from 'react'
import {View, Dimensions} from 'react-native'

import Image from '@/components/listings/Image'
import {Row, Price, Street, Neighborhood} from './components'
import $styles from './styles'

function FlatListingCard({children, styles, style, ...props}) {
  const {raised, width, images, ...rest} = props
  const image = images[0] || {}
  const imageSize = {
    width,
    height: width * 0.64
  }
  if (!raised) {
    imageSize.width -= 30
    imageSize.height -= 30
  }
  return (
    <View style={styles.container.concat(style, {width})} {...rest}>
      <View style={styles.thumbnail}>
        <Image thumbnail style={styles.image} {...image} {...imageSize} />
      </View>
      <View style={styles.body}>
        {React.Children.map(children, (child) => (
          <View style={styles.paragraph}>
            {React.cloneElement(child, props)}
          </View>
        ))}
      </View>
    </View>
  )
}

FlatListingCard.defaultProps = {
  get width() {
    return Dimensions.get('window').width
  },
  get children() {
    return [
      <Row key="header">
        <Street />
        <Neighborhood />
      </Row>,
      <Price key="price" />
    ]
  }
}

export default $styles.inject()(FlatListingCard)
