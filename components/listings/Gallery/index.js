import _ from 'lodash'
import {Component} from 'react'
import {View, ScrollView, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Image from '../Image'
import styles from './styles'

export default class ListingGallery extends Component {
  state = {
    position: 0
  }

  onSwipe = (offset) => () =>
    this.setState((state) => ({
      position: _.clamp(state.position + offset, this.items.length)
    }))

  onSwipeLeft = this.onSwipe(-1)

  onSwipeRight = this.onSwipe(1)

  isActive = ({position}) => this.state.position === position

  get items() {
    return this.props.children
  }

  get dimensions() {
    return Dimensions.get('window')
  }

  renderPagination() {
    return this.items.map((image) => (
      <Icon
        key={image.id}
        name="circle"
        style={[styles.icon, this.isActive(image) && styles.iconActive]}
      />
    ))
  }

  renderImages() {
    return this.items.map((image) => (
      <Image key={image.id} {...image} {...this.dimensions} />
    ))
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal
          style={styles.gallery}
          snapToInterval={this.dimensions.width}
          snapToAlignment="center"
          decelerationRate="fast"
        >
          {this.renderImages()}
        </ScrollView>
        <View style={styles.pagination}>{this.renderPagination()}</View>
      </View>
    )
  }
}
