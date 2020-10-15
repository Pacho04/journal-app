import React from 'react';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { mount } from "enzyme";
import { LoginScreen } from "../../../components/auth/LoginScreen";
import { Provider } from 'react-redux';
import { startGoogleLogin, startLoginEmailPassword } from '../../../actions/auth';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../../../actions/auth', () => ({
    startGoogleLogin: jest.fn(),
    startLoginEmailPassword: jest.fn()
}));


const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <LoginScreen />
        </MemoryRouter>
    </Provider>
)

describe('Pruebas en LoginScreen', () => {

    beforeEach(() => {
        store = mockStore(initState);
        jest.clearAllMocks();
    });

    test('debe de mostarse correctamente', () => {
    
        expect(wrapper).toMatchSnapshot();
        
    });

    test('debe de mostrarse correctamente el startGoogleLogin', () => {
        wrapper.find('.google-btn').prop('onClick')();

        expect(startGoogleLogin).toHaveBeenCalled();
    });

    test('debe mostrarse correctamente el startLoginEmailPassword', () => {
        wrapper.find('form').prop('onSubmit')({ 
            preventDefault(){}
        });

        expect(startLoginEmailPassword).toHaveBeenLastCalledWith('david@gmail.com','123456');

        
    });
    
    
    

})
