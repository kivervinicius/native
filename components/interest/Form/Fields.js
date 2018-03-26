import {TextInput} from 'react-native'

export function Name({onChange, ...props}) {
  return <TextInput placeholder="Nome" onChangeText={onChange} {...props} />
}

export function Email({onChange, ...props}) {
  return (
    <TextInput
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
      placeholder="Mensagem (Opcional)"
      onChangeText={onChange}
      {...props}
    />
  )
}

export default {
  name: Name,
  email: Email,
  phone: Phone,
  message: Message
}
