import Price from '@/components/shared/Price'
import {withListing} from './Loader'

function ListingNavigationApp({data: {price}, ...props}) {
  return <Price {...props}>{price}</Price>
}

export default withListing(ListingNavigationApp)
