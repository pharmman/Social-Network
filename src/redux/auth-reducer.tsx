import {ActionsType, ThunkType} from './store';
import {authAPI} from '../api/api';
import {stopSubmit} from 'redux-form';
import {Dispatch} from 'redux';


export type AuthDataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean,
    captchaUrl: string
}

export type SetCaptchaUrlType = ReturnType<typeof setCaptchaUrl>

const initialState: AuthDataType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: ''
}

export const authReducer = (state = initialState, action: ActionsType): AuthDataType => {
    switch (action.type) {
        case 'AUTH/SET-AUTH-DATA':
        case 'AUTH/SET-CAPTCHA-URL':
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export type SetAuthDataType = ReturnType<typeof setAuthData>
export const setAuthData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) =>
    ({type: 'AUTH/SET-AUTH-DATA', payload: {id, email, login, isAuth}} as const)

const setCaptchaUrl = (captchaUrl: string) => ({type: 'AUTH/SET-CAPTCHA-URL', payload: {captchaUrl}} as const)

export const getAuthUserData = () => async (dispatch: Dispatch) => {
    const data = await authAPI.authMe()
    if (data.resultCode === 0) {
        const {id, email, login} = data.data
        dispatch(setAuthData(id, email, login, true))
    }
}


export const loginTC = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType =>
    async (dispatch) => {
        const response = await authAPI.login(email, password, rememberMe, captcha)
        if (response.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            if (response.resultCode === 10) {
                const message = response.messages.length > 0 ? response.messages[0] : 'Email or password incorrect'
                dispatch(stopSubmit('login', {_error: message}))
                dispatch(getCaptchaUrl())
            } else {
                const message = response.messages.length > 0 ? response.messages[0] : 'Email or password incorrect'
                dispatch(stopSubmit('login', {_error: message}))
            }
        }
    }

export const logOutTC = (): ThunkType => async (dispatch) => {
    const response = await authAPI.logOut()
    if (response.resultCode === 0) {
        dispatch(setAuthData(null, null, null, false))
    }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const response = await authAPI.getCaptchaUrl()
    dispatch(setCaptchaUrl(response.url))
}