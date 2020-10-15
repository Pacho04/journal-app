import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { login, logout, startLoginEmailPassword, startLogout } from "../../actions/auth";
import { types } from "../../types/types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);

describe('Pruebas en athu', () => {

    beforeEach(() => {
        store = mockStore(initState);
    })

    test('Login y Logout debe de crear la accion respectiva', () => {
        const uid = 'ABCD1234';
        const displayName = 'David';

        const loginAction = login(uid, displayName);
        const logoutAction = logout();

        expect(loginAction).toEqual({
            type: types.login,
            payload: {
                uid,
                displayName
            }
        });

        expect(logoutAction).toEqual({
            type: types.logout
        })

    });

    test('debe de realizar el logout', async () => {

        await store.dispatch(startLogout());
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: types.logout
        })

        expect(actions[1]).toEqual({
            type: types.notesLogoutCleaning
        })
    });

    test('debe de iniciar el startLoginEmailPassword', async() => {
        await store.dispatch(startLoginEmailPassword('testing@testing.com', '123456'));

        const actions = store.getActions();

        expect(actions[1]).toEqual({
            type: types.login,
            payload: {
                uid: 'BoWJ1EzpS6WohqpjEOPiJmjoorx2',
                displayName: null
            }
        })
    })
    


})
