import axios from 'axios';
import {UserType} from '../redux/users-reducer';
import {ProfileType} from '../redux/profile-reducer';

type GetUsersResponseType = {
    items: UserType[]
    totalCount: string
    error: string | null
}

export type ResponseType<T = {}> = {
    resultCode: number
    messages: string[]
    data: T
}

type ProfileResponseType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
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
    getProfile(userId: string | number) {
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
    },
    updateProfilePhoto(photo: File) {
        let data = new FormData();
        data.append('photo', photo);
        return instance.put<ResponseType<{ photos: { small: string, large: string } }>>('profile/photo', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                return response.data
            })
    },
    updateProfile(profile:ProfileType) {
        return instance.put<ResponseType>('profile', {...profile})
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
    login(email: string, password: string, rememberMe: boolean, captcha:string) {
        return instance.post<AuthMeResponseType<{ userId: number }>>('auth/login', {
            email,
            password,
            rememberMe,
            captcha
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
    },
    getCaptchaUrl() {
        return instance.get<{url:string}>('security/get-captcha-url')
            .then(response => {
                return response.data
            })
    }
}