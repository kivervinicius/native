import React from 'react'

export const {Consumer, Provider} = React.createContext({
  value: {},
  onChange: () => () => null,
  onValidate: () => () => null
})
