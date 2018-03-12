import _ from 'lodash/fp'
import {FlatList} from 'react-native'

import Card from '../Card'
import styles from './styles'

const keyExtractor = _.flow(_.get('id'), _.toString)

export default function ListingsFeed(props) {
  return (
    <FlatList
      {...props}
      style={styles.container}
      keyExtractor={keyExtractor}
      renderItem={({item}) => <Card {...item} />}
    />
  )
}
