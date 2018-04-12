import React from 'react'
import Orientation from 'react-native-orientation'

export const Context = React.createContext({
  locked: false,
  dimensions: {},
  orientation: Orientation.getInitialOrientation
})

export const withOrientation = (Target) => (props) => (
  <Context.Consumer>
    {(data) => <Target {...props} {...data} />}
  </Context.Consumer>
)

export const Consumer = Context.Consumer

export const Provider = ({value, ...props}) => (
  <Context.Consumer>
    {(data) => <Context.Provider value={{...data, ...value}} {...props} />}
  </Context.Consumer>
)
