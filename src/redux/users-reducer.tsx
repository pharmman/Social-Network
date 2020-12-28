import {ActionsType} from './store';

export type UsersPageType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
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
    pageSize: 100,
    isFetching: false,
    followingInProgress: []
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
            return {
                ...state,
                currentPage: action.page
            }
        case 'SET-TOTAL-USERS-COUNT':
            return {
                ...state,
                totalUsersCount: action.count
            }
        case 'CHANGE-FETCHING-STATUS':
            return {
                ...state,
                isFetching: action.fetching
            }
        case 'TOGGLE-FOLLOWING-PROGRESS':
            return {
                ...state,
                followingInProgress: action.followingProgress
                    ?
                    [...state.followingInProgress, action.userId]
                    :
                    state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export type FollowType = ReturnType<typeof follow>
export type UnfollowType = ReturnType<typeof unFollow>
export type SetUsersType = ReturnType<typeof setUsers>
export type SetCurrentPageType = ReturnType<typeof setCurrentPage>
export type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
export type ChangeFetchingStatusType = ReturnType<typeof changeFetchingStatus>
export type ToggleFollowingProgressType = ReturnType<typeof toggleFollowingProgress>


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

export const setCurrentPage = (page: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        page
    } as const
}

export const setTotalUsersCount = (count:number) => {
    return{
        type: 'SET-TOTAL-USERS-COUNT',
        count
    } as const
}

export const changeFetchingStatus = (fetching:boolean) => {
    return {
        type: 'CHANGE-FETCHING-STATUS',
        fetching
    } as const
}

export const toggleFollowingProgress = (followingProgress:boolean, userId:number) => {
    return {
        type: 'TOGGLE-FOLLOWING-PROGRESS',
        followingProgress,
        userId
    } as const
}