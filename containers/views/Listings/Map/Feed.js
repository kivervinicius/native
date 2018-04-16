import {Dimensions} from 'react-native'
import {Header} from '@/components/listings/Card'
import Feed from '@/containers/listings/Feed'

export default function MapListings(props) {
  return (
    <Feed
      {...props}
      layout="horizontal"
      slideWidth={Dimensions.get('window').width / 1.5}
    >
      <Header size={16} />
    </Feed>
  )
}
