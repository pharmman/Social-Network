import {ActionsType} from './store';


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


export const authReducer = (state = initialState, action: ActionsType):AuthDataType => {
    switch (action.type) {
        case 'SET-AUTH-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export type SetAuthDataType = ReturnType<typeof setAuthData>

export const setAuthData = (id: number, email: string, login: string) => {
    return {
        type: 'SET-AUTH-DATA',
        data: {
            id,
            email,
            login
        }
    } as const
}