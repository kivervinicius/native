import InputRange from './InputRange'
import SelectRange from './SelectRange'
import Select from './Select'

const mapRange = (options, label) =>
  options.map((i) => ({
    label: typeof label === 'function' ? label(i) : `${i} ${label}`,
    value: i
  }))

const assign = (options) => (Target) => {
  const Component = (props) => <Target {...props} />
  return Object.assign(Component, options)
}

export const price = assign({
  title: 'Preço'
})(InputRange)

export const rooms = assign({
  title: 'Quartos',
  defaultProps: {
    options: mapRange([1, 2, 3, 4], 'quartos')
  }
})(SelectRange)

export const area = assign({
  title: 'Área',
  defaultProps: {
    options: mapRange([50, 80, 100, 200, 300, 500], 'm²')
  }
})(SelectRange)

export const neighborhoods = assign({
  title: 'Bairros',
  defaultProps: {
    options: []
  }
})(Select)

export default {
  price,
  rooms,
  area,
  neighborhoods
}
