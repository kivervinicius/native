import _ from 'lodash/fp'
import MultiSelect from 'react-native-sectioned-multi-select'

import styles from './styles'

const mapItems = _.map(({label, value}) => ({name: label, id: value}))

export default function SelectField({value, options, onChange}) {
  return (
    <MultiSelect
      styles={styles}
      uniqueKey="id"
      items={mapItems(options)}
      selectedItems={value}
      onSelectedItemsChange={onChange}
    />
  )
}
