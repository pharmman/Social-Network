import {ActionsType} from './store';

export type UsersPageType = {
    users: Array<UserType>
    totalUsersCount: number
    currentPage: number
    pageSize: number
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


const initialState:UsersPageType = {
    users:[],
    totalUsersCount: 0,
    currentPage: 6,
    pageSize: 100
}


export const usersReducer = (state:UsersPageType = initialState, action: ActionsType):UsersPageType => {
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
            return {
                ...state,
                currentPage: action.currentPage
            }
        case 'SET-TOTAL-USERS-COUNT':
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        default:
            return state
    }
}

export type FollowType = ReturnType<typeof followAC>
export type UnfollowType = ReturnType<typeof unFollowAC>
export type SetUsersType = ReturnType<typeof setUsersAC>
export type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCountAC>
export type SetCurrentUsersPageType = ReturnType<typeof setCurrentPageAC>


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

export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalUsersCount
    } as const
}

export const setCurrentPageAC = (currentPage:number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
}