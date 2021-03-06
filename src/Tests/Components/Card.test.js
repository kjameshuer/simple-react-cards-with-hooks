import React from 'react';

import Card from 'Components/Card/Card';
import { shallow } from 'enzyme';
import { person } from 'Tests/testHelper';

var wrapped;

beforeEach(() => {
  wrapped = shallow(<Card person={person} />)

})
afterEach(()=>{
  wrapped.unmount();
})

it('renders as a button without crashing', () => {
  expect(wrapped.find('button').length).toEqual(1);
})

it('is unselected by default', () => {
  expect(wrapped.find('.card').hasClass('selected')).toEqual(false)
})

it('shows the image of the person on the card__image class',()=>{
  expect(wrapped.find('.card__image').length).toEqual(1)
})

it('lists the persons first name on the .card__name_first class',()=>{
  expect(wrapped.find('.card__name_first').text()).toEqual('anna')
})

it('lists the persons last name on the .card__name_last class',()=>{
  expect(wrapped.find('.card__name_last').text()).toEqual('vicente')
})

it('lists the persons city and state on the .card__location class',()=>{
  expect(wrapped.find('.card__location').text()).toEqual('alcobendas, castilla la mancha')
})

