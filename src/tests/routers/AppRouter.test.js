import React from 'react';
import { firebase } from '../../firebase/firebase-config';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { mount } from "enzyme";
import { Provider } from 'react-redux';
import { login } from '../../actions/auth';
import { AppRouter } from '../../routers/AppRouter';
import { act } from 'react-dom/test-utils';
import Swal from 'sweetalert2';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../../actions/auth', () => ({
    login: jest.fn()
}));
jest.mock('sweetalert2', () => ({
    fire: jest.fn()
}));

const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    },
    notes: {
        active: {
            id: 'ABC',
        },
        notes: []
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();


describe('Purebas en el AppRouter', () => {

    test('debe de llamr al login si estoy autenticado ', async () => {

        let user;

        await act(async () => {

            const userCred = await firebase.auth().signInWithEmailAndPassword('testing@testing.com', '123456');

            const wrapper = mount(
                <Provider store={store}>
                    <MemoryRouter>
                        <AppRouter />
                    </MemoryRouter>
                </Provider>
            );
        });

        expect(login).toHaveBeenCalledWith('BoWJ1EzpS6WohqpjEOPiJmjoorx2', null);

    })

});
