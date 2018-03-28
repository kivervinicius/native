import _ from 'lodash/fp'

export default (styles) =>
  _.flow(
    (...args) => args,
    _.map((value) => {
      if (typeof value === 'string' && value in styles) return styles[value]
      return value
    }),
    _.concat([])
  )
