import React, {Component} from 'react'
import {View, Dimensions} from 'react-native'
import Carousel from 'react-native-snap-carousel'

import Card from '@/components/listings/Card'
import $styles, {cardStyles} from './styles'

@$styles.inject()
export default class HorizontalFeed extends Component {
  static defaultProps = {
    get slideWidth() {
      return Dimensions.get('window').width / 1.25
    },
    get width() {
      return Dimensions.get('window').width
    }
  }

  slider = React.createRef()

  componentDidUpdate(prev) {
    const {active, data} = this.props
    if (prev.active !== active && active) {
      this.slider.value.snapToItem(data.findIndex(({id}) => id == active))
    }
  }

  get totalCount() {
    return this.props.data.length
  }

  renderItem = ({item: {id, ...props}}) => {
    const {styles, onSelect, children, slideWidth, active, raised} = this.props
    const primary = active === id
    return (
      <View style={styles.item} key={id}>
        <Card
          primary={primary}
          raised={raised}
          width={slideWidth - (raised ? 20 : 0)}
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
    const {data, style, styles, loop, width, slideWidth} = this.props
    return (
      <Carousel
        enableMomentum
        loop={loop}
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
        activeSlideAlignment={loop ? 'center' : 'start'}
        containerCustomStyle={styles.container.concat(style)}
        slideStyle={styles.slide}
        data={data}
        renderItem={this.renderItem}
        sliderWidth={width}
        itemWidth={slideWidth}
        ref={this.slider}
      />
    )
  }
}
