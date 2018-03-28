import {withFeed} from './Feed'
import Map, {Marker} from '@/components/listings/Map'

function MapApp({data}) {
  return <Map>{data && data.map((listing) => <Marker {...listing} />)}</Map>
}

export default withFeed(MapApp)
