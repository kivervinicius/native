import {Component} from 'react'
import {View, Button} from 'react-native'

import Modal from '@/components/shared/Modal'
import Gallery from '../Gallery'
import Matterport from '../Matterport'
import Description from './Description'
import Properties from './Properties'
import styles from './styles'

export default class ListingView extends Component {
  state = {
    view: undefined
  }

  onOpen = (view) => () => this.setState({view})

  onOpenGallery = this.onOpen('gallery')
  onOpenTour = this.onOpen('matterport')

  onClose = () => this.setState({view: undefined})

  renderGallery() {}
  renderModal() {
    const {images} = this.props
    const {view} = this.state

    switch (view) {
      case 'gallery':
        return <Gallery>{images}</Gallery>
      case 'matterport':
        return <Matterport code={this.props.matterport_code} />
      default:
        return undefined
    }
  }

  render() {
    const {view} = this.state
    return (
      <View style={styles.container}>
        <Button title="Ver Imagens" onPress={this.onOpenGallery} />
        <Properties {...this.props} />
        <Description {...this.props} />
        <Modal overlay visible={Boolean(view)} onDismiss={this.onClose}>
          {this.renderModal()}
        </Modal>
      </View>
    )
  }
}
