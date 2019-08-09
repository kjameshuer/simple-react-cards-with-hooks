import React from 'react';
import ReactDOM from 'react-dom';
import App from 'Components/App/App';

import { shallow } from 'enzyme';
var wrapped;

beforeEach(() => {
  wrapped = shallow(<App />)

})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('has a button with class .load_more',()=>{
  expect(wrapped.find('.load_more').length).toEqual(1);
})