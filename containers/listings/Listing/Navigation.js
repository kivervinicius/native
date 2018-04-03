import Navigation from '@/components/listings/Listing/Navigation'
import {withListing} from './Loader'

function ListingNavigationApp({data, ...props}) {
  return <Navigation {...data} {...props} />
}

export default withListing(ListingNavigationApp)
