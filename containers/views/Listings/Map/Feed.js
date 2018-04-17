import {Dimensions} from 'react-native'
import {Row, Street, Price} from '@/components/listings/Card'
import Feed from '@/containers/listings/Feed'
import InfiniteScroll from '@/components/shared/InfiniteScroll'

export default function MapListings(props) {
  return (
    <Feed
      {...props}
      layout="horizontal"
      slideWidth={Dimensions.get('window').width / 1.5}
      as={InfiniteScroll}
    >
      <Row>
        <Street size={14} />
        <Price size={16} />
      </Row>
    </Feed>
  )
}
