import {Component} from 'react'

import Shell from '@/containers/shared/Shell'
import Search from '@/components/listings/Search'

export default class ListingsSearchScreen extends Component {
  onSubmit = (params) => {
    const {navigation} = this.props
    setTimeout(() => navigation.navigate('results', params))
  }

  render() {
    return (
      <Shell>
        <Search screenProps={{onSubmit: this.onSubmit}} />
      </Shell>
    )
  }
}

export const screen = ListingsSearchScreen
