import {ActionsType} from './store';
import {followAPI, usersAPI} from '../api/api';
import {restoreState, saveState} from '../localStorage/localStorage';

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
    currentPage: restoreState('currentUsersPage', 1),
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
            saveState('currentUsersPage', action.page)
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

export type FollowType = ReturnType<typeof followAC>
export type UnfollowType = ReturnType<typeof unFollowAC>
export type SetUsersType = ReturnType<typeof setUsers>
export type SetCurrentPageType = ReturnType<typeof setCurrentPage>
export type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
export type ChangeFetchingStatusType = ReturnType<typeof changeFetchingStatus>
export type ToggleFollowingProgressType = ReturnType<typeof toggleFollowingProgress>


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

export const requestUsers = (currentPage: number, pageSize:number) => (dispatch:(action:ActionsType) => void) => {
    dispatch(changeFetchingStatus(true))
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(setCurrentPage(currentPage))
            dispatch( changeFetchingStatus(false))
            dispatch( setTotalUsersCount(+data.totalCount))
            dispatch( setUsers(data.items))
        })
}

export const follow = (id:number) => (dispatch:(action:ActionsType) => void) => {
    dispatch(toggleFollowingProgress(true, id))
    followAPI.follow(id)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(followAC(id))
            }
            dispatch(toggleFollowingProgress(false, id))
        })
}

export const unFollow = (id:number) => (dispatch:(func:ActionsType) => void) => {
    dispatch(toggleFollowingProgress(true, id))
    followAPI.unFollow(id)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(unFollowAC(id))
            }
            dispatch(toggleFollowingProgress(false, id))
        })
}