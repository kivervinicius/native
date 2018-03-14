import {Component} from 'react'
import {View, Text, Button} from 'react-native'

import Modal from '@/components/shared/Modal'
import Gallery from '../Gallery'
import Properties from './Properties'
import styles from './styles'

export default class ListingView extends Component {
  state = {
    view: undefined
  }

  onOpen = (view) => () => this.setState({view})

  onOpenGallery = this.onOpen('gallery')

  onClose = () => this.setState({view: undefined})

  renderGallery() {}
  renderModal() {
    const {images} = this.props
    const {view} = this.state

    switch (view) {
      case 'gallery':
        return <Gallery>{images}</Gallery>
      default:
        return undefined
    }
  }

  render() {
    const {description, ...props} = this.props
    const {view} = this.state
    return (
      <View style={styles.container}>
        <Button title="Ver Imagens" onPress={this.onOpenGallery} />
        <Properties {...props} />
        <Text style={styles.description}>{description}</Text>
        <Modal overlay visible={Boolean(view)} onDismiss={this.onClose}>
          {this.renderModal()}
        </Modal>
      </View>
    )
  }
}
