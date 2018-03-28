import {concat} from 'lodash'
import _ from 'lodash/fp'
import combine from './combine'
import inject from './hoc'

export default function createStyleSheet(flat) {
  const styleSheet = _.flow(
    _.pickBy(_.identity),
    _.pick(flat.variants),
    (variantsToApply) => {
      const result = {}
      flat.namespaces.forEach((namespace) => {
        result[namespace] = styleSheet.get(namespace, variantsToApply)
      })
      return result
    }
  )
  styleSheet.get = (namespace, variantsToApply = {}) =>
    _.keys(variantsToApply).reduce(
      (result, variant) => {
        const key = `${namespace}__${variant}`
        if (key in flat.styles && variantsToApply[variant])
          result.push(flat.styles[key])
        return result
      },
      [flat.styles[namespace]]
    )
  styleSheet._flat = flat
  styleSheet.inject = inject(styleSheet)
  styleSheet.all = combine(styleSheet)
  return Object.assign(styleSheet, flat.styles)
}
