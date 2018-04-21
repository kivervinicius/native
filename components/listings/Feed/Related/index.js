import {Dimensions} from 'react-native'

import Card from '@/components/listings/Card/Related'
import HorizontalFeed from '../Horizontal'

export default function RelatedFeed(props) {
  const width = Dimensions.get('window').width
  return (
    <HorizontalFeed
      {...props}
      style={{paddingLeft: 10}}
      width={width - 40}
      renderItem={(item) => <Card {...item} />}
    />
  )
}
