import {ActionsType} from './store';

export type UsersPageType = {
    users: Array<UserType>
    totalUsersCount: number
    currentPage: number
    pageSize: number
    isFetching: boolean
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
    pageSize: 100,
    isFetching: false
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
        case 'TOGGLE-IS-FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export type FollowType = ReturnType<typeof follow>
export type UnfollowType = ReturnType<typeof unFollow>
export type SetUsersType = ReturnType<typeof setUsers>
export type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
export type SetCurrentUsersPageType = ReturnType<typeof setCurrentUsersPage>
export type ToggleIsFetchingType = ReturnType<typeof toggleIsFetching>


export const follow = (userId: number) => {
    return {
        type: 'FOLLOW',
        id: userId
    } as const
}

export const unFollow = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        id: userID
    } as const
}

export const setUsers = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        users: users
    } as const
}

export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalUsersCount
    } as const
}

export const setCurrentUsersPage = (currentPage:number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
}

export const toggleIsFetching = (isFetching:boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching
    } as const
}