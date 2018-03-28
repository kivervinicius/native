import Shell from '@/containers/shared/Shell'
import Map from '@/containers/listings/Map'

export default function MapScreen() {
  return (
    <Shell overlay>
      <Map type="search" />
    </Shell>
  )
}

export const screen = MapScreen
