import Feed from '@/components/listings/Feed'
import Loader from './Loader'

export default function RelatedListingApp({id, ...props}) {
  return (
    <Loader id={id}>
      <Feed {...props} />
    </Loader>
  )
}

RelatedListingApp.defaultProps = {
  layout: 'horizontal'
}
