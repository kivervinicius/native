import _ from 'lodash/fp'
import {validate as validateEmail} from 'email-validator'

export const validate = (fun, defaultMessage = '') => (message) => (value) => {
  if (!fun(value)) return message || defaultMessage
}

export const required = validate(_.identity, 'Este campo é obrigatório')

export const email = validate(validateEmail, 'Este email é inválido')
