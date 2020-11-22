import {ActionsType} from './store';

export type UsersPageType = {
    users: Array<UserType>,
    pageSize: number
    totalUsersCount: number,
    currentPage: number
}

export type UserType = {
    id: number
    name: string
    status: string | null
    photos: {
        small: string | null
        large: string | null
    }
    followed: boolean
}


const initialState = {
    users: [],
    totalUsersCount: 0,
    currentPage: 2,
    pageSize: 100
}


export const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case 'SET-USERS':
            return {
                ...state,
                users: [...action.users]
            }
        case 'SET-CURRENT-PAGE':
            debugger
            return {
                ...state,
                currentPage: action.page
            }
        case 'SET-TOTAL-USERS-COUNT':
            return {
                ...state,
                totalUsersCount: action.count
            }
        default:
            return state
    }
}

export type FollowType = ReturnType<typeof followAC>
export type UnfollowType = ReturnType<typeof unFollowAC>
export type SetUsersType = ReturnType<typeof setUsersAC>
export type SetCurrentPageType = ReturnType<typeof setCurrentPageAC>
export type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCountAC>


export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        id: userId
    } as const
}

export const unFollowAC = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        id: userID
    } as const
}

export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        users: users
    } as const
}

export const setCurrentPageAC = (page: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        page
    } as const
}

export const setTotalUsersCountAC = (count:number) => {
    return{
        type: 'SET-TOTAL-USERS-COUNT',
        count
    } as const
}