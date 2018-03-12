import {Component} from 'react'
import {ScrollView} from 'react-native'

export default class InfiniteScroll extends Component {
  static defaultProps = {
    threshold: 1000
  }

  onLoad = () => {
    const {onLoad, currentPage} = this.props
    onLoad(currentPage + 1)
  }

  shouldTriggerLoad = ({contentOffset, contentSize, layoutMeasurement}) => {
    const {threshold} = this.props
    const offsetHeight = contentOffset.y
    const height = contentSize.height - layoutMeasurement.height
    const distance = height - offsetHeight
    return !isNaN(distance) && Math.abs(distance) <= threshold
  }

  onScroll = ({nativeEvent}) => {
    if (this.shouldTriggerLoad(nativeEvent)) {
      this.onLoad()
    }
  }

  render() {
    const {children} = this.props
    return (
      <ScrollView onScroll={this.onScroll} scrollEventThrottle={100}>
        {children}
      </ScrollView>
    )
  }
}
