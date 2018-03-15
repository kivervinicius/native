import _ from 'lodash'
import {Component} from 'react'
import {View} from 'react-native'
import SwipeableView from 'react-swipeable-views-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import {responsive} from '@/components/shared/Orientation'
import Image from '../Image'
import styles from './styles'

@responsive()
export default class ListingGallery extends Component {
  state = {
    position: 0
  }

  onSwipe = (position) => this.setState({position})

  get items() {
    return this.props.children
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
    const {dimensions} = this.props
    return this.items.map((image) => (
      <Image key={image.id} {...image} {...dimensions} />
    ))
  }

  render() {
    return (
      <View style={styles.container}>
        <SwipeableView style={styles.gallery} onChangeIndex={this.onSwipe}>
          {this.renderImages()}
        </SwipeableView>
        <View style={styles.pagination}>{this.renderPagination()}</View>
      </View>
    )
  }
}
