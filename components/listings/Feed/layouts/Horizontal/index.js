import _ from 'lodash'
import {Component} from 'react'
import {View} from 'react-native'
import SwipeableView from 'react-swipeable-views-native'
import {virtualize} from 'react-swipeable-views-utils'

import Card from '@/components/listings/Card'
import styles, {cardStyles} from './styles'

const VirtualizedView = virtualize(SwipeableView)

export default class HorizontalFeed extends Component {
  static defaultProps = {
    count: 2
  }

  slideRenderer = ({index}) => {
    const {data, count} = this.props
    let itemIndex = this.totalCount + index % this.totalCount
    itemIndex *= count
    return (
      <View style={styles.slide} key={index}>
        {_.times(count).map((i) =>
          this.renderSlide(data[(itemIndex + i) % this.totalCount])
        )}
      </View>
    )
  }

  get totalCount() {
    return this.props.data.length
  }

  renderSlide = ({id, ...props}) => {
    const {onSelect, count} = this.props
    return (
      <View style={styles.item} key={id}>
        <Card
          size={1 / count}
          styles={cardStyles}
          onPress={onSelect(id)}
          {...props}
        />
      </View>
    )
  }

  render() {
    if (!this.totalCount) return null
    return (
      <VirtualizedView
        style={styles.container}
        containerStyle={styles.container}
        overscanSlideAfter={1}
        overscanSlideBefore={1}
        slideRenderer={this.slideRenderer}
      />
    )
  }
}
