import React from 'react'
import { mount, render, shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Start from '../Student/MainScreen/Start'
import { Provider } from 'react-redux';
import store from '../store';

configure({ adapter: new Adapter() });

describe('test some buttons', () => {
    it ('check WhenToSimplify button', () => {
        const mockFunction = jest.fn()
        const component = mount(
        <Provider store={store}>
            <Start nextScreen={mockFunction}/>
        </Provider>)
        component.find('button#button-start-mainscreen').simulate('click')
        expect(mockFunction).toHaveBeenCalled();
        component.unmount()
    })
})