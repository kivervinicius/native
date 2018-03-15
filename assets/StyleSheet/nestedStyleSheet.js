import _ from 'lodash/fp'

export default function createStyleSheet(flat) {
  const get = (namespace, variantsToApply = {}) =>
    _.keys(variantsToApply).reduce(
      (result, variant) =>
        result.concat(flat.styles[`${namespace}__${variant}`]),
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
  return Object.assign(styleSheet, {get}, flat.styles)
}
