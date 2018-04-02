import * as Fields from '@/containers/listings/Search'
import createFilter from '../createFilter'

export const Price = createFilter({name: 'price'})(Fields.Price)
export const Area = createFilter({name: 'area'})(Fields.Area)
export const Rooms = createFilter({name: 'rooms'})(Fields.Rooms)
