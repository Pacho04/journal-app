import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe('Pruebas en el authReducer', () => {
   
    test('debe de realizar el login', () => {
        const initialState = {};

        const action = {
            type: types.login,
            payload: {
                uid: 'abcd',
                displayName: 'David'
            }
        };

        const state = authReducer(initialState, action);

        expect(state).toEqual({
            uid: 'abcd',
            name: 'David'
        })

    });

    test('debe de realizar el logout', () => {
        const initialState = {
            uid: 'abcd',
            name: 'David'
        };

        const action = {
            type: types.logout,
        };

        const state = authReducer(initialState, action);

        expect(state).toEqual({})

    });

    test('no debe de hacer cambios en el state', () => {
        const initialState = {
            uid: 'abcd',
            name: 'David'
        };

        const action = {
            type: 'assasfa',
        };

        const state = authReducer(initialState, action);

        expect(state).toEqual(initialState)

    });
    
});
