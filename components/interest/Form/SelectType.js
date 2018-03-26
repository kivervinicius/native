import {Picker} from 'react-native'

export default function SelectInterestType({types, value, onChange}) {
  return (
    <Picker selectedValue={value} onValueChange={onChange}>
      {types.map(({id, name}) => (
        <Picker.Item key={id} value={id} label={name} />
      ))}
    </Picker>
  )
}
