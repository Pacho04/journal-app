import React from 'react';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { mount } from "enzyme";
import { Provider } from 'react-redux';
import { RegisterScreen } from '../../../components/auth/RegisterScreen';
import { types } from '../../../types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    }
};

let store = mockStore(initState);

const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <RegisterScreen />
        </MemoryRouter>
    </Provider>
)

describe('Pruebas en RegisterScreen', () => {
    
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de disparar la accion correctamente', () => {
       const emailField = wrapper.find('input[name="email"]');
       
       emailField.simulate('change', {
           target: {
               value: '',
               name: 'email'
           }
       });

       wrapper.find('form').simulate('submit', {
           preventDefault(){}
       });

       const actions = store.getActions();

       expect(actions[0]).toEqual({
           type: types.uiSetError,
           payload: 'Email is not valid'
       });

    });
    
    test('debe de mostrar correctamente la caja de alerta', () => {
        const initState = {
            auth: {},
            ui: {
                loading: false,
                msgError: 'Error en el email'
            }
        };
        
        let store = mockStore(initState);
        
        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <RegisterScreen />
                </MemoryRouter>
            </Provider>
        );

        expect(wrapper.find('.auth__alert-erorr').exists()).toBe(true);
        expect(wrapper.find('.auth__alert-erorr').text().trim()).toBe(initState.ui.msgError);

    });
    

})
