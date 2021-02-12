import {ThunkType} from './store';
import {getAuthUserData} from './auth-reducer';

export type AppDataType = {
    initialization: boolean
}
export type AppReducerActionsType = SetInitializationType
type SetInitializationType = ReturnType<typeof setInitialization>
const initialState: AppDataType = {
    initialization: false,
}

export const appReducer = (state = initialState, action: AppReducerActionsType): AppDataType => {
    switch (action.type) {
        case 'APP/SET-INITIALIZATION':
            return {
                ...state,
                initialization: true
            }
        default:
            return state
    }
}

const setInitialization = () => ({type: 'APP/SET-INITIALIZATION'} as const)
export const initializeApp = ():ThunkType => (dispatch) => {
    dispatch(getAuthUserData()).then(() => {
        dispatch(setInitialization())
    })
}