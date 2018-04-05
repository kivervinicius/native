import {Component} from 'react'
import withNavigation from 'react-navigation/src/views/withNavigation'

import Header from '@/components/shared/Shell/Header'

@withNavigation
export default class HeaderApp extends Component {
  onReturn = () => {
    const {navigation} = this.props
    navigation.goBack(null)
  }

  render() {
    return <Header {...this.props} onReturn={this.onReturn} />
  }
}
