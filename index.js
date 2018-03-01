import {AppRegistry} from 'react-native'

import App from '@/containers/App'
import Provider from '@/containers/Provider'

AppRegistry.registerComponent('EmCasa', () => App)

AppRegistry.setWrapperComponentProvider(() => Provider)
