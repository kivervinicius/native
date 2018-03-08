import Provider from '@/containers/Provider'
import App from '@/containers/App'

import renderer from 'react-test-renderer'

describe('containers/App', () => {
  it('renders without crashing', () => {
    const node = renderer.create(
      <Provider>
        <App />
      </Provider>
    )
    expect(node.getInstance()).toBeTruthy()
  })
})
