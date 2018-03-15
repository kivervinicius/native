import _ from 'lodash'

export default function flatten(styles) {
  const result = {}
  const variants = []
  const namespaces = []
  _.map(styles, (style, namespace) => {
    result[namespace] = {}
    namespaces.push(namespace)
    _.map(style, (value, key) => {
      if (key.charAt(0) === ':') {
        const variant = key.substr(1)
        result[`${namespace}__${variant}`] = value
        variants.push(variant)
      } else {
        result[namespace][key] = value
      }
    })
  })
  return {
    namespaces,
    variants: _.uniq(variants),
    styles: result
  }
}
