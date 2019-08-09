import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios'
import App from 'Components/App/App'
import { people } from 'Tests/testHelper';

beforeEach(() => {
    moxios.install()
    moxios.stubRequest('https://randomuser.me/api/?results=10', {
        status: 200,
        response: { results: people } 
    })
});

afterEach(() => {
    moxios.uninstall();
})

it('loads without crashing', () => {
    const wrapped = mount(<App />);
    expect(wrapped.find('.App').length).toEqual(1)
    wrapped.unmount();
})

it('loads the people list', () => {
    const wrapped = mount(<App />)
    expect(wrapped.find('.people_list').length).toEqual(1)
    wrapped.unmount();
})

it('loads ten people from API on start', done => {
    const wrapped = mount(<App />);
    moxios.wait(() => {
        wrapped.update()
        expect(wrapped.find('.card').length).toEqual(10);
        done()
        wrapped.unmount();
    })
})

it('loads ten more people when clicking on the Load More Button', done => {
    const wrapped = mount(<App />);
    moxios.wait(() => {
        wrapped.update()
        wrapped.find('.load_more')
        .simulate('click')
        moxios.wait(()=>{
            wrapped.update();
            expect(wrapped.find('.card').length).toEqual(20);
            done()
            wrapped.unmount();
        })
      
    })
})

it('selects a person when their button is clicked on', done => {
    const wrapped = mount(<App />);
    moxios.wait(() => {
        wrapped.update()
        wrapped.find('.card')
        .first()
        .simulate('click')
        wrapped.update();
        expect(wrapped.find('.card').first().hasClass('selected')).toEqual(true)
        done()
        wrapped.unmount();
    })
})


