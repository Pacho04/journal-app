import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from "enzyme";
import { Provider } from 'react-redux';
import { startLogout } from '../../../actions/auth';
import { startNewNote } from '../../../actions/notes';
import { Sidebar } from '../../../components/journal/Sidebar';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../../../actions/auth', () => ({
    startLogout: jest.fn()
}));
jest.mock('../../../actions/notes', () => ({
    startNewNote: jest.fn()
}));

const initState = {
    auth: {
        uid: '111',
        name: 'David'
    },
    ui: {
        loading: false,
        msgError: null
    },
    notes: {
        active: null,
        notes: []
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
            <Sidebar />
    </Provider>
);

describe('Pruebas en el Sidebar', () => {
    
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de llamar al startLogout', () => {
        wrapper.find('button').prop('onClick')();

        expect(startLogout).toHaveBeenCalled();
    });

    test('debe de llamar al startNewNote', () => {
        wrapper.find('.journal__new-entry').prop('onClick')();

        expect(startNewNote).toHaveBeenCalled();
    });
    
})
