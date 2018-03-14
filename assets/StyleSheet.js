import _ from 'lodash/fp'
import {StyleSheet} from 'react-native'

export function flatten(styles) {
  return _.entries(styles).reduce((result, [namespace, style]) => {
    result[namespace] = {}
    _.entries(style).forEach(([key, value]) => {
      if (key.charAt(0) === ':') {
        result[`${namespace}__${key.substr(1)}`] = value
      } else {
        result[namespace][key] = value
      }
    })
    return result
  }, {})
}

const normalize = _.flow(_.pickBy(_.identity), _.keys)

const buildStyleSheet = (styleSheet) => (namespace) => (variants = {}) => {
  const style = [styleSheet[namespace]]
  normalize(variants).forEach((key) => {
    const variant = `${namespace}__${key}`
    if (variant in styleSheet) style.push(styleSheet[variant])
  })
  return style
}

const styleSheetFactory = _.flow(flatten, StyleSheet.create, buildStyleSheet)

export default function NestedStyleSheet(styles) {
  const builder = styleSheetFactory(styles)
  return Object.keys(styles).reduce((result, key) => {
    result[key] = builder(key)
    return result
  }, {})
}
