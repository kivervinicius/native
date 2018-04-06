import React from 'react'
import {View, Dimensions} from 'react-native'

import Image from '@/components/listings/Image'
import {Price, Header} from './components'
import $styles from './styles'

const WIDTH = Dimensions.get('window').width - 30
const HEIGHT = WIDTH * 0.64

function FlatListingCard({children, ...props}) {
  const {styles, width, images} = props
  const image = images[0] || {}
  const height = HEIGHT * WIDTH / width
  return (
    <View style={styles.container}>
      <View style={styles.thumbnail}>
        <Image
          thumbnail
          width={width}
          height={height}
          style={styles.image}
          {...image}
        />
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
  width: WIDTH,
  get children() {
    return [<Header key="header" />, <Price key="price" />]
  }
}

export default $styles.inject()(FlatListingCard)
