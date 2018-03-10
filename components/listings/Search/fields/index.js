import InputRange from './InputRange'
import SelectRange from './SelectRange'
import Select from './Select'

const ROOM_OPTIONS = [1, 2, 3, 4]
const AREA_OPTIONS = [50, 80, 100, 200, 300, 500]

const mapRange = (label) => (i) => ({
  label: typeof label === 'function' ? label(i) : `${i} ${label}`,
  value: i
})

export const price = InputRange
export const rooms = (props) => (
  <SelectRange options={mapRange('quartos')(ROOM_OPTIONS)} {...props} />
)
export const area = (props) => (
  <SelectRange options={mapRange('m²')(AREA_OPTIONS)} {...props} />
)
export const neighborhoods = (props) => <Select options={[]} {...props} />
