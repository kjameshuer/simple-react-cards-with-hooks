import React from 'react';
import { mount } from 'enzyme';
import PeopleList from 'Components/PeopleList/PeopleList';
import { people } from 'Tests/testHelper';

let wrapped;

beforeEach(()=>{
    wrapped = mount(<PeopleList people={people}/>)
})

it('creates a list item for each person in the people list', ()=>{
    expect(wrapped.find('.card').length).toEqual(10)
})

