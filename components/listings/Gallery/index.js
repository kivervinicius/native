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

  onSwipe = ({nativeEvent}) => {
    const position = nativeEvent.contentOffset.x / this.dimensions.width
    const index = Math.round(position)
    this.setState({position: index})
  }

  get items() {
    return this.props.children
  }

  get dimensions() {
    return Dimensions.get('window')
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
      <Image key={image.id} {...image} {...this.dimensions} />
    ))
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal
          bounces={false}
          style={styles.gallery}
          snapToInterval={this.dimensions.width}
          snapToAlignment="center"
          decelerationRate="fast"
          onScroll={this.onSwipe}
          scrollEventThrottle={200}
        >
          {this.renderImages()}
        </ScrollView>
        <View style={styles.pagination}>{this.renderPagination()}</View>
      </View>
    )
  }
}
