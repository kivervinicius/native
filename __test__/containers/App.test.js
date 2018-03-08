import Provider from '@/containers/Provider'
import App from '@/containers/App'

import renderer from 'react-test-renderer'

describe('containers/App', () => {
  it('renders without crashing', () => {
    const rendered = renderer
      .create(
        <Provider>
          <App />
        </Provider>
      )
      .toJSON()
    expect(rendered).toBeTruthy()
  })
})
