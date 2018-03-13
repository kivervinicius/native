import _ from 'lodash/fp'
import {Component} from 'react'
import {FlatList} from 'react-native'
import withNavigation from 'react-navigation/src/views/withNavigation'

import Card from './TouchableCard'
import styles from './styles'

const keyExtractor = _.flow(_.get('id'), _.toString)

class ListingsFeed extends Component {
  onSelect = (id) => () => {
    const {navigation} = this.props
    navigation.navigate('listing', {id})
  }

  render() {
    return (
      <FlatList
        {...this.props}
        style={styles.container}
        keyExtractor={keyExtractor}
        renderItem={({item}) => (
          <Card onPress={this.onSelect(item.id)} {...item} />
        )}
      />
    )
  }
}

export default withNavigation(ListingsFeed)
