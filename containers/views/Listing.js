import {Component} from 'react'
import {withNavigationFocus} from 'react-navigation'

import Shell, {Section} from '@/containers/shared/Shell'
import Listing, {Navigation} from '@/containers/listings/Listing'
import RelatedListings from '@/containers/listings/Related'

export default class ListingScreen extends Component {
  onInterest = () => {
    const {navigation} = this.props
    navigation.navigate('interestForm', navigation.state.params)
  }

  render() {
    const {navigation, isFocused} = this.props
    const {id} = navigation.state.params

    return (
      <Shell
        scroll
        footer={<Navigation id={id} onInterest={this.onInterest} />}
      >
        <Listing active={isFocused} id={id} />
        <Section title="Veja Também">
          <RelatedListings id={id} />
        </Section>
      </Shell>
    )
  }
}

export const screen = withNavigationFocus(ListingScreen)
