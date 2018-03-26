import Shell from '@/containers/shared/Shell'
import Form from '@/containers/interest/Form'

export default function InterestFormScreen({navigation}) {
  return (
    <Shell scroll>
      <Form id={navigation.state.params.id} />
    </Shell>
  )
}

export const screen = InterestFormScreen
