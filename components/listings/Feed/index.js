import _ from 'lodash/fp'
import {FlatList} from 'react-native'

import Card from '../Card'

const keyExtractor = _.flow(_.get('id'), _.toString)

export default function ListingsFeed(props) {
  return (
    <FlatList
      {...props}
      keyExtractor={keyExtractor}
      renderItem={({item}) => <Card {...item} />}
    />
  )
}
