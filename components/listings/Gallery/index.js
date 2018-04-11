import {Component} from 'react'
import {View} from 'react-native'
import SwipeableView from 'react-swipeable-views-native/lib/SwipeableViews.scroll'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import {withOrientation} from '@/containers/shared/Orientation/Provider'
import Image from '../Image'
import styles from './styles'

@withOrientation
export default class ListingGallery extends Component {
  state = {
    position: 0
  }

  onChange = (position) => this.setState({position: Math.floor(position)})

  onLayout = (e) => {
    const {dimensions} = this.props
    const {position} = this.state
    this.gallery.handleLayout(e)
    this.gallery.scrollViewNode.scrollTo({
      x: dimensions.width * position,
      y: 0,
      animated: false
    })
  }

  get items() {
    return this.props.children
  }

  galleryRef = (node) => {
    this.gallery = node
  }

  renderPagination() {
    const {position} = this.state

    return this.items.map((image, index) => (
      <Icon
        key={image.id}
        name="circle"
        style={[styles.icon, position === index && styles.iconActive]}
      />
    ))
  }

  renderImages() {
    return this.items.map((image) => (
      <Image
        layout="scalable"
        key={image.id}
        width={800}
        height={650}
        {...image}
      />
    ))
  }

  render() {
    const {dimensions} = this.props
    return (
      <View style={[styles.container, dimensions]}>
        <SwipeableView
          ref={this.galleryRef}
          onLayout={this.onLayout}
          style={styles.gallery}
          onChangeIndex={this.onChange}
        >
          {this.renderImages()}
        </SwipeableView>
        <View style={styles.pagination}>{this.renderPagination()}</View>
      </View>
    )
  }
}
