import {ActionsType, ThunkType} from './store';
import {authAPI} from '../api/api';
import {FormErrors, stopSubmit} from 'redux-form';
import {FormAction} from 'redux-form/lib/actions';
import {ThunkAction} from 'redux-thunk';
import {StateType} from './redux-store';
import {Action} from 'redux';


export type AuthDataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState: AuthDataType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}


export const authReducer = (state = initialState, action: ActionsType): AuthDataType => {
    switch (action.type) {
        case 'SET-AUTH-DATA':
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export type SetAuthDataType = ReturnType<typeof setAuthData>

export const setAuthData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: 'SET-AUTH-DATA',
        payload: {
            id,
            email,
            login,
            isAuth
        }
    } as const
}

export const getAuthUserData = (): ThunkType => (dispatch) => {
    authAPI.authMe().then(data => {
        if (data.resultCode === 0) {
            const {id, email, login} = data.data
            dispatch(setAuthData(id, email, login, true))
        }
    })
}

export const loginTC = (email: string, password: string, rememberMe: boolean): ThunkAction<void, StateType, unknown, Action> => (dispatch) => {

    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                const message = response.messages.length > 0 ? response.messages[0] : 'Email or password incorrect'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
}

export const logOutTC = (): ThunkType => (dispatch) => {
    authAPI.logOut()
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setAuthData(null, null, null, false))
            }
        })
}