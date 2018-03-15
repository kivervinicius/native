import _ from 'lodash/fp'
import inject from './hoc'

export default function createStyleSheet(flat) {
  const get = (namespace, variantsToApply = {}) =>
    _.keys(variantsToApply).reduce(
      (result, variant) => {
        const key = `${namespace}__${variant}`
        if (key in flat.styles && variantsToApply[variant])
          result.push(flat.styles[key])
        return result
      },
      [flat.styles[namespace]]
    )
  const styleSheet = _.flow(
    _.pickBy(_.identity),
    _.pick(flat.variants),
    (variantsToApply) => {
      const result = {}
      flat.namespaces.forEach((namespace) => {
        result[namespace] = get(namespace, variantsToApply)
      })
      return result
    }
  )
  return Object.assign(
    styleSheet,
    {
      inject: inject(styleSheet),
      _flat: flat,
      get
    },
    flat.styles
  )
}
