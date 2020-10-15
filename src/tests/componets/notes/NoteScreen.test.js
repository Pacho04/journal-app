import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from "enzyme";
import { Provider } from 'react-redux';
import { activeNote } from '../../../actions/notes';
import { NoteScreen } from '../../../components/notes/NoteScreen';




const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../../../actions/notes', () => ({
    activeNote: jest.fn()
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
        active: {
            id: 1234,
            title: 'Hola',
            body: 'Mundo',
            date: 0
        },
        notes: []
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
            <NoteScreen />
    </Provider>
);

describe('Pruebas en el NoteScreen', () => {
    
    test('debe de mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de disparar el active note', () => {
        wrapper.find('input[name="title"]').simulate('change', {
            target: {
                name: 'title',
                value: 'Hola de nuevo'
            }
        });

        expect(activeNote).toHaveBeenLastCalledWith(
            1234,
            {
                body: 'Mundo',
                title: 'Hola de nuevo',
                id: 1234,
                date: 0
            }
        )

    })
    
    

})
