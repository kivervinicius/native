import _ from 'lodash/fp'
import {Component} from 'react'
import {FlatList} from 'react-native'
import withNavigation from 'react-navigation/src/views/withNavigation'

import Card from '@/components/listings/Card'

const keyExtractor = _.flow(_.get('id'), _.toString)

@withNavigation
export default class ListingsFeed extends Component {
  onSelect = (id) => () => {
    const {navigation} = this.props
    navigation.navigate('listing', {id})
  }

  render() {
    const {layout} = this.props

    return (
      <FlatList
        {...this.props}
        keyExtractor={keyExtractor}
        renderItem={({item}) => (
          <Card onPress={this.onSelect(item.id)} layout={layout} {...item} />
        )}
      />
    )
  }
}
