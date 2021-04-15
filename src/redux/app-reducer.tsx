import {getAuthUserData} from './auth-reducer';
import {ThunkType} from "./store";

type AppDataType = typeof initialState
export type AppReducerActionsType = SetInitializationType
type SetInitializationType = ReturnType<typeof setInitialization>

const initialState = {
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