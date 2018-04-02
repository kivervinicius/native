import {withNeighborhoods} from '@/containers/neighborhoods/Loader'
import {Neighborhoods as NeighborhoodsField} from '@/components/listings/Search'

export const Neighborhoods = withNeighborhoods(NeighborhoodsField)

const mapOptions = (options) => options.map((value) => ({label: value, value}))
