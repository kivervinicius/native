import {Price, Street, Neighborhood} from '@/components/listings/Card'
import RelatedFeed from '@/containers/listings/Related'

export default function RelatedListings(props) {
  return (
    <RelatedFeed {...props} raised>
      <Price />
      <Street thin />
      <Neighborhood />
    </RelatedFeed>
  )
}
