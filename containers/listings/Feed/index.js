import Feed from '@/components/listings/Feed'
import Loader from './Loader'

export default function FeedApp({as, type, ...props}) {
  return (
    <Loader as={as} type={type} {...props}>
      <Feed {...props} />
    </Loader>
  )
}

export {Results, Empty} from '@/components/listings/Feed'
