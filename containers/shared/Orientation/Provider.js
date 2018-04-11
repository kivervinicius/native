import React from 'react'

export const Context = React.createContext({
  locked: false
})

export const withOrientation = (Target) => (props) => (
  <Context.Consumer>
    {(data) => <Target {...props} {...data} />}
  </Context.Consumer>
)

const OrientationProvider = ({value, ...props}) => (
  <Context.Consumer>
    {(data) => <Context.Provider value={{...data, ...value}} {...props} />}
  </Context.Consumer>
)

export default OrientationProvider
