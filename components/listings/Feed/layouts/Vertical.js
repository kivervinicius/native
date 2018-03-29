import _ from 'lodash/fp'
import {FlatList} from 'react-native'

import Card from '@/components/listings/Card'

const keyExtractor = _.flow(_.get('id'), _.toString)

export default function VerticalFeed({onSelect, ...props}) {
  return (
    <FlatList
      {...props}
      keyExtractor={keyExtractor}
      renderItem={({item}) => <Card onPress={onSelect(item.id)} {...item} />}
    />
  )
}
