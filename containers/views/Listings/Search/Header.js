import {Component} from 'react'

import Header from '@/components/listings/Search/Header'

export default class SearchHeaderApp extends Component {
  onNavigate = () => {
    const {navigation} = this.props
    navigation.goBack(null)
  }

  render() {
    const {navigation} = this.props
    const isRoot = navigation.state.routes.length == 1
    return <Header root={isRoot} onNavigate={this.onNavigate} />
  }
}
