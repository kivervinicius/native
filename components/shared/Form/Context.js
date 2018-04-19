import React from 'react'

export const {Consumer, Provider} = React.createContext({
  value: {},
  validation: {},
  onChange: () => () => null,
  onValidate: () => () => null
})
