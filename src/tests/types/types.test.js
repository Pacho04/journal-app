import { types } from "../../types/types";


describe('Pruebas en el objeto types.js', () => {


    const type = {
        login: '[Auth] Login',
        logout: '[Auth] Logout',

        uiSetError: '[UI] Set Error',
        uiRemoveError: '[UI] Remove Error',

        uiStartLoading: '[UI] Start loading',
        uiFinishLoading: '[UI] Finish loading',

        notesAddNew: '[Notes] New note',
        notesActive: '[Notes] Set active note',
        notesLoad: '[Notes] Load notes',
        notesUpdate: '[Notes] Update note',
        notesFileUrl: '[Notes] Update Image note',
        notesDelete: '[Notes] Delete note',
        notesLogoutCleaning: '[Notes] Logout Cleaning'
    }

    test('debe de mostrar el objeto correctamente', () => {
        expect(types).toEqual(type);
    })


})
