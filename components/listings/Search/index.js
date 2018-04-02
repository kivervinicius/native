import PriceText from '@/components/shared/Price'
import {SelectRange, SlideRange} from './Field'

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
    options: [
      {value: 1, label: '1'},
      {value: 2, label: '2'},
      {value: 3, label: '3'},
      {value: 4, label: '+4'}
    ]
  }
})(SelectRange)

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
})(({data, ...props}) => <SelectRange options={mapOptions(data)} {...props} />)
