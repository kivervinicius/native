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
    const {count} = this.props
    let itemIndex = (count + index % count) * count
    return (
      <View style={styles.slide} key={index}>
        {_.times(count).map((i) =>
          this.renderSlideNumber((itemIndex + i) % count)
        )}
      </View>
    )
  }

  get totalCount() {
    return this.props.data.length
  }

  get slideCount() {
    const {count} = this.props
    if (this.totalCount <= count) return count
    return undefined
  }

  renderSlideNumber = (n) => {
    const {count} = this.props
    const item = this.props.data[n]
    if (item) return this.renderSlide(item)
    return (
      <View
        key={`placeholder-${n}`}
        style={[styles.placeholder, {flex: 1 / count}]}
      />
    )
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
    const {slideCount} = this
    return (
      <VirtualizedView
        style={styles.container}
        containerStyle={styles.container}
        overscanSlideAfter={slideCount ? 0 : 1}
        overscanSlideBefore={slideCount ? 0 : 1}
        slideCount={slideCount}
        slideRenderer={this.slideRenderer}
      />
    )
  }
}
