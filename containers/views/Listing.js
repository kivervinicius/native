import {Component} from 'react'
import {withNavigationFocus} from 'react-navigation'

import Shell from '@/containers/shared/Shell'
import Listing from '@/containers/listings/View'

export default class ListingScreen extends Component {
  onInterest = () => {
    const {navigation} = this.props
    navigation.navigate('interestForm', navigation.state.params)
  }

  render() {
    const {navigation, isFocused} = this.props
    return (
      <Shell scroll>
        <Listing
          active={isFocused}
          id={navigation.state.params.id}
          onInterest={this.onInterest}
        />
      </Shell>
    )
  }
}

export const screen = withNavigationFocus(ListingScreen)
