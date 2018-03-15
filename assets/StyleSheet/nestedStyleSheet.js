import _ from 'lodash/fp'

export default function createStyleSheet(flat) {
  const get = (namespace, variantsToApply = {}) =>
    _.keys(variantsToApply).reduce(
      (result, variant) => {
        const key = `${namespace}__${variant}`
        if (key in flat.styles) result.push(flat.styles[key])
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
  return Object.assign(styleSheet, {get}, flat.styles)
}
