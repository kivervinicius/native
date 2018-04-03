import {Neighborhoods} from '@/containers/listings/Search'
import createFilter from './createFilter'
import Screen from './Screen'

const NeighborhoodFilter = createFilter({name: 'neighborhoods'})(
  Neighborhoods.Options
)

export default function NeighborhoodScreen(props) {
  return (
    <Screen {...props}>
      <NeighborhoodFilter />
    </Screen>
  )
}
export const screen = NeighborhoodScreen
