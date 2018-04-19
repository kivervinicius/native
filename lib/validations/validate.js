import _ from 'lodash/fp'

import * as VALIDATIONS from './index'

export const OK = {valid: true, errors: []}

const resolveValidations = _.reduce.convert({cap: false})((arr, value, key) => {
  let validations = []
  if (_.isString(key) && key in VALIDATIONS)
    validations.push(VALIDATIONS[key](value))
  if (_.isString(value) && value in VALIDATIONS)
    validations.push(VALIDATIONS[key]())
  else if (_.isFunction(value)) validations.push(value)
  else if (_.isObject(value)) validations.push(...resolveValidations(value))
  return arr.concat(validations)
}, [])

const validate = (validations) => (value) =>
  resolveValidations(validations).reduce(({valid, errors}, fun) => {
    const error = fun(value)
    if (error) return {valid: false, errors: errors.concat(error)}
    else return {valid, errors}
  }, OK)

export default validate
