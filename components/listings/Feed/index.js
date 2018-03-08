import {View} from 'react-native'

import Card from '../Card'

export default function ListingsFeed({data}) {
  return (
    <View>{data.map((listing) => <Card key={listing.id} {...listing} />)}</View>
  )
}
