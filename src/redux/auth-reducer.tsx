import {ActionsType} from './store';

export type AuthType = {
    id: number
    email: string
    login: string
    isAuth: boolean
}

const initialState:AuthType = {
    id: 0,
    email: '',
    login: '',
    isAuth: false
}

export const authReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET-USERS-AUTH-DATA':
            return {
                ...state,
                ...action,
                isAuth: true
            }
        default:
            return state
    }
}

export type SetUsersAuthDataActionType = ReturnType<typeof setUsersAuthData>

export const setUsersAuthData = (id: number, email: string, login: string) => {
    return {
        type: 'SET-USERS-AUTH-DATA',
        id,
        email,
        login
    } as const
}