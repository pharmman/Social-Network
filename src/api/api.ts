import axios from 'axios';
import {UserType} from '../redux/users-reducer';

type GetUsersResponseType = {
    items: UserType[]
    totalCount: string
    error: string | null
}

export type ResponseType = {
    resultCode: number
    messages: string[]
    data: {}
}

type ProfileResponseType = {
    aboutMe: string
    contacts: {
        facebook: null | string
        website: null | string
        vk: null | string
        twitter: null | string
        instagram: null | string
        youtube: null | string
        github: null | string
        mainLink: null | string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

type AuthMeResponseType<T = {
    id: number
    email: string
    login: string
}> = {
    data: T
    resultCode: number
    messages: Array<string>
}

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'ea1464d3-6693-4a83-9755-2421f1dd088c'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<GetUsersResponseType>(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => {
                return response.data
            })
    }
}

export const followAPI = {
    follow(id: number) {
        return instance.post<ResponseType>(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    unFollow(id: number) {
        return instance.delete<ResponseType>(`follow/${id}`)
            .then(response => {
                return response.data
            })
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get<ProfileResponseType>(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getProfileStatus(userId: string) {
        return instance.get<string>(`profile/status/${userId}`)
            .then(response => {
                return response.data
            })
    },
    updateProfileStatus(status: string) {
        return instance.put<ResponseType>('profile/status', {status})
            .then(response => {
                return response.data
            })
    }
}

export const authAPI = {
    authMe() {
        return instance.get<AuthMeResponseType>('/auth/me')
            .then(response => {
                return response.data
            })
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<AuthMeResponseType<{ userId: number }>>('auth/login', {
            email,
            password,
            rememberMe,
        })
            .then(response => {
                return response.data
            })
    },
    logOut() {
        return instance.delete<AuthMeResponseType<Object>>('auth/login',)
            .then(response => {
                return response.data
            })
    }
}