import {AppRegistry, YellowBox} from 'react-native'

import App from '@/containers/App'
import Provider from '@/containers/Provider'

// Temporary fix for
// https://github.com/facebook/react-native/issues/18175
YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated'
])

AppRegistry.registerComponent('EmCasa', () => App)

AppRegistry.setWrapperComponentProvider(() => Provider)
