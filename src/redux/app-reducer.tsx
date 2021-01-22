import {ThunkType} from './store';
import {getAuthUserData} from './auth-reducer';


export type AppDataType = {
    initialization: boolean
}

const initialState: AppDataType = {
    initialization: false,

}

export type AppReducerActionsType = SetInitializationType
type SetInitializationType = ReturnType<typeof setInitialization>


export const appReducer = (state = initialState, action: AppReducerActionsType): AppDataType => {
    switch (action.type) {
        case 'SET-INITIALIZATION':
            return {
                ...state,
                initialization: true
            }
        default:
            return state
    }
}

const setInitialization = () => ({type: 'SET-INITIALIZATION'} as const)

export const initializeApp = ():ThunkType => (dispatch) => {
    dispatch(getAuthUserData()).then(() => {
        dispatch(setInitialization())
    })


}