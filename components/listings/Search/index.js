import PriceText from '@/components/shared/Price'
import {Select, SlideRange} from './Field'

const mapRange = (options, label = '') =>
  [{label: String.fromCharCode(0x2500), value: undefined}].concat(
    options.map((i) => ({
      label: typeof label === 'function' ? label(i) : `${i} ${label}`,
      value: i
    }))
  )

const mapOptions = (options) => options.map((value) => ({label: value, value}))

export const assign = (options) => (Target) => {
  const Field = (props) => <Target {...props} />
  return Object.assign(Field, options)
}

export const Price = assign({
  title: 'Preço',
  defaultProps: {
    max: 10000000,
    step: 100000,
    renderLabel(value) {
      return (
        <PriceText size={18} abbrev>
          {value}
        </PriceText>
      )
    }
  }
})(SlideRange)

export const Rooms = assign({
  title: 'Quartos',
  defaultProps: {
    options: mapRange([1, 2, 3, 4])
  }
})(Select)

export const Area = assign({
  title: 'Área',
  defaultProps: {
    max: 1000,
    suffix: 'm²',
    step: 10
  }
})(SlideRange)

export const Neighborhoods = assign({
  title: 'Bairros'
})(({data, ...props}) => <Select options={mapOptions(data)} {...props} />)
