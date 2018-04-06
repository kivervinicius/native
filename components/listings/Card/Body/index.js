import React from 'react'
import {View, Dimensions} from 'react-native'

import Image from '@/components/listings/Image'
import {Price, Header} from './components'
import $styles from './styles'

function FlatListingCard({children, style, ...props}) {
  const {styles, raised, width, images} = props
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
    <View style={styles.container.concat(style, {width})}>
      <View style={styles.thumbnail}>
        <Image thumbnail style={styles.image} {...image} {...imageSize} />
      </View>
      <View style={styles.body}>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, props)
        )}
      </View>
    </View>
  )
}

FlatListingCard.defaultProps = {
  get width() {
    return Dimensions.get('window').width
  },
  get children() {
    return [<Header key="header" />, <Price key="price" />]
  }
}

export default $styles.inject()(FlatListingCard)
