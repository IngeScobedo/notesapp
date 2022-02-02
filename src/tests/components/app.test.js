import React from 'react'
import App from '../../components/App'
import { shallow } from 'enzyme'

describe('Test <App/>', () => {
  test('should render app', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })
})
