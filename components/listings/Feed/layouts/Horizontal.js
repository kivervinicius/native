import {Component} from 'react'
import SwipeableView from 'react-swipeable-views-native'
import {virtualize} from 'react-swipeable-views-utils'

import Card from '@/components/listings/Card'

const VirtualizedView = virtualize(SwipeableView)

export default class HorizontalFeed extends Component {
  renderSlide = ({index}) => {
    const {count} = this
    const {onSelect, data} = this.props
    const item = data[(count + index % count) % count]
    return <Card key={item.id} onPress={onSelect(item.id)} {...item} />
  }

  get count() {
    return this.props.data.length
  }

  render() {
    if (!this.count) return null
    return (
      <VirtualizedView
        overscanSlideAfter={1}
        overscanSlideBefore={1}
        slideRenderer={this.renderSlide}
      />
    )
  }
}
