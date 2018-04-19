import {Dimensions} from 'react-native'
import {Row, Street, Price} from '@/components/listings/Card'
import Feed from '@/containers/listings/Feed'
import InfiniteScroll from '@/components/shared/InfiniteScroll'

export default function MapListings(props) {
  const {width} = Dimensions.get('window')
  return (
    <Feed
      {...props}
      layout="horizontal"
      slideWidth={width / 1.5}
      threshold={width * 5}
      as={InfiniteScroll}
    >
      <Row>
        <Street size={14} />
        <Price size={16} />
      </Row>
    </Feed>
  )
}
