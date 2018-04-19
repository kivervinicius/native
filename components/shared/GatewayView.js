import React from 'react'
import {View} from 'react-native'
import {GatewayDest} from 'react-gateway'

function GatewayView({children, ...props}) {
  const childrenArray = React.Children.toArray(children)
  const renderTarget = childrenArray[0]
  return <View {...props}>{renderTarget}</View>
}

export default (props) => <GatewayDest component={GatewayView} {...props} />
