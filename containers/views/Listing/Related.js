import {Dimensions} from 'react-native'
import {Price, Street, Neighborhood} from '@/components/listings/Card'
import RelatedFeed from '@/containers/listings/Related'
import styles from './styles'

export default function RelatedListings(props) {
  return (
    <RelatedFeed
      {...props}
      raised
      style={styles.relatedListings}
      slideWidth={Dimensions.get('window').width - 40}
    >
      <Price />
      <Street style={styles.street} />
      <Neighborhood />
    </RelatedFeed>
  )
}
