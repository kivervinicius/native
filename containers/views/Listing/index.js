import {Component} from 'react'
import {Dimensions} from 'react-native'
import {withNavigationFocus} from 'react-navigation'

import Shell, {Section, Footer} from '@/containers/shared/Shell'
import Listing, {Price} from '@/containers/listings/Listing'
import RelatedListings from './Related'

export default class ListingScreen extends Component {
  onInterest = () => {
    const {navigation} = this.props
    navigation.navigate('interestForm', navigation.state.params)
  }

  get slideWidth() {
    return Dimensions.get('window').width - 65
  }

  render() {
    const {navigation, isFocused} = this.props
    const {id} = navigation.state.params

    return (
      <Shell
        scroll
        title={<Price id={id} size={24} />}
        footer={
          <Footer
            color="green"
            label="Marcar Visita"
            onPress={this.onInterest}
          />
        }
      >
        <Listing active={isFocused} id={id} />
        <Section title="Veja Também">
          <RelatedListings id={id} slideWidth={this.slideWidth} />
        </Section>
      </Shell>
    )
  }
}

export const screen = withNavigationFocus(ListingScreen)
