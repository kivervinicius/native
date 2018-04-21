import {Dimensions} from 'react-native'

import Card from '@/components/listings/Card/Map'
import HorizontalFeed from '../Horizontal'

export default function MapFeed(props) {
  const width = Dimensions.get('window').width
  return (
    <HorizontalFeed
      {...props}
      slideWidth={width / 1.5}
      renderItem={(item) => <Card {...item} />}
    />
  )
}
