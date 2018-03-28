import withNavigation from 'react-navigation/src/views/withNavigation'

import Shell from '@/components/shared/Shell'
import Header from './Header'

function ShellApp({...props}) {
  if (typeof props.header === 'undefined') {
    props.header = <Header />
  }
  return <Shell {...props} />
}

export default withNavigation(ShellApp)
