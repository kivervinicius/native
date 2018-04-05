import _ from 'lodash'
import {Picker} from 'react-native'

import TextInput from '@/components/shared/TextInput'
import styles from './styles'

export function Name({onChange, ...props}) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Nome"
      onChangeText={onChange}
      {...props}
    />
  )
}

export function Email({onChange, ...props}) {
  return (
    <TextInput
      style={styles.input}
      keyboardType="email-address"
      placeholder="Email"
      onChangeText={onChange}
      {...props}
    />
  )
}

export function Phone({onChange, ...props}) {
  return (
    <TextInput
      style={styles.input}
      keyboardType="phone-pad"
      placeholder="Telefone"
      onChangeText={onChange}
      {...props}
    />
  )
}

export function Message({onChange, ...props}) {
  return (
    <TextInput
      autoCorrect
      multiline
      numberOfLines={4}
      style={styles.input}
      placeholder="Mensagem (Opcional)"
      onChangeText={onChange}
      {...props}
    />
  )
}

const formatHour = (t) => {
  const hour = _.padStart(String(t % 12), 2, '0')
  const period = t / 12 >= 1 ? 'PM' : 'AM'
  return `${hour}:00${period}`
}

export function Time({onChange, value, interval, ...props}) {
  return (
    <Picker selectedValue={value} onValueChange={onChange} {...props}>
      {interval.map((time) => (
        <Picker.Item key={time} value={time} label={time} />
      ))}
    </Picker>
  )
}

Time.defaultProps = {
  interval: _.range(8, 20).map(formatHour)
}

export default {
  name: Name,
  email: Email,
  phone: Phone,
  time: Time,
  message: Message
}
