import _ from 'lodash/fp'
import {FlatList} from 'react-native'

import Card from '@/components/listings/Card/Listing'
import Empty from '../Empty'

const keyExtractor = _.flow(_.get('id'), _.toString)

export default function ListingFeed({onSelect, ...props}) {
  return (
    <FlatList
      {...props}
      ListEmptyComponent={Empty}
      keyExtractor={keyExtractor}
      renderItem={({item}) => <Card onPress={onSelect(item.id)} {...item} />}
    />
  )
}
