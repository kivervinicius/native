import {withNeighborhoods} from '@/containers/neighborhoods/Loader'
import {
  SelectRange,
  SlideRange,
  MultiSelect
} from '@/components/listings/Search/Field'

const mapOptions = (options) => options.map((value) => ({label: value, value}))

export const assign = (options) => (Target) => {
  const Field = (props) => <Target {...props} />
  return Object.assign(Field, options)
}

export const Price = assign({
  defaultProps: {
    max: 10000000,
    step: 100000,
    renderLabel: SlideRange.priceLabel
  }
})(SlideRange)

export const Rooms = assign({
  defaultProps: {
    options: [
      {value: 1, label: '1'},
      {value: 2, label: '2'},
      {value: 3, label: '3'},
      {value: 4, label: '+4'}
    ]
  }
})(SelectRange)

export const Area = assign({
  defaultProps: {
    max: 1000,
    suffix: 'm²',
    step: 10
  }
})(SlideRange)

export const Neighborhoods = withNeighborhoods(({neighborhoods, ...props}) => (
  <MultiSelect {...props} options={mapOptions(neighborhoods)} />
))
