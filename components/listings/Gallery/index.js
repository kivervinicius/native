import _ from 'lodash'
import {Component} from 'react'
import {View} from 'react-native'
import SwipeableView from 'react-swipeable-views-native/lib/SwipeableViews.scroll'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import {responsive} from '@/components/shared/Orientation'
import Image from '../Image'
import styles from './styles'

@responsive()
export default class ListingGallery extends Component {
  state = {
    position: 0
  }

  onChange = (position) => this.setState({position: Math.floor(position)})

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
    return (
      <View style={styles.container}>
        <SwipeableView style={styles.gallery} onChangeIndex={this.onChange}>
          {this.renderImages()}
        </SwipeableView>
        <View style={styles.pagination}>{this.renderPagination()}</View>
      </View>
    )
  }
}
