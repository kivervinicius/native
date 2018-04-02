import RelatedLoader from '@/containers/listings/Related/Loader'
import {withListing} from '@/containers/listings/Listing/Loader'
import Feed from '@/components/listings/Feed'

function MapFeed({id, data: listing}) {
  return (
    <RelatedLoader id={id}>
      {({data}) => (
        <Feed
          layout="horizontal"
          data={[{...listing, primary: true}].concat(data)}
        />
      )}
    </RelatedLoader>
  )
}

export default withListing(MapFeed)
