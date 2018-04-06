import _ from 'lodash'
import {Component} from 'react'
import {View, Dimensions} from 'react-native'
import Carousel from 'react-native-snap-carousel'

import Card from '@/components/listings/Card'
import styles, {cardStyles} from './styles'

export default class HorizontalFeed extends Component {
  static defaultProps = {
    count: 1.25,
    get width() {
      return Dimensions.get('window').width
    }
  }

  get totalCount() {
    return this.props.data.length
  }

  renderItem = ({item: {id, ...props}}) => {
    const {onSelect, children, count, width, raised} = this.props
    return (
      <View style={styles.item} key={id}>
        <Card
          raised={raised}
          width={width / count - 20}
          styles={cardStyles}
          onPress={onSelect(id)}
          children={children}
          {...props}
        />
      </View>
    )
  }

  render() {
    if (!this.totalCount) return null
    const {data, count, width} = this.props
    return (
      <Carousel
        loop
        enableMomentum
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
        style={styles.container}
        slideStyle={styles.slide}
        data={data}
        renderItem={this.renderItem}
        sliderWidth={width}
        itemWidth={width / count}
      />
    )
  }
}
