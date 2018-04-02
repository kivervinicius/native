import {withNeighborhoods} from '@/containers/neighborhoods/Loader'
import {Neighborhoods as NeighborhoodsField} from '@/components/listings/Search'

export const Neighborhoods = withNeighborhoods(NeighborhoodsField)

export {Price, Area, Rooms} from '@/components/listings/Search'
