import View from '@/components/listings/Listing'
import Loader from './Loader'

export default function ListingApp({id, ...props}) {
  return (
    <Loader id={id}>{({data}) => data && <View {...data} {...props} />}</Loader>
  )
}

export {default as Navigation} from './Navigation'
