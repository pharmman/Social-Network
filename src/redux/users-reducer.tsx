import {ActionsType, ThunkType} from './store';
import {followAPI, ResponseType, usersAPI} from '../api/api';
import {saveState} from '../localStorage/localStorage';
import {Dispatch} from 'redux';

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
    currentPage: 1,
    pageSize: 10,
    isFetching: false,
    followingInProgress: []
}


export const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {
    switch (action.type) {
        case 'USERS/FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case 'USERS/UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case 'USERS/SET-USERS':
            return {
                ...state,
                users: [...action.users]
            }
        case 'USERS/SET-CURRENT-PAGE':
            saveState('currentUsersPage', action.page)
            return {
                ...state,
                currentPage: action.page
            }
        case 'USERS/SET-TOTAL-USERS-COUNT':
            return {
                ...state,
                totalUsersCount: action.count
            }
        case 'USERS/CHANGE-FETCHING-STATUS':
            return {
                ...state,
                isFetching: action.fetching
            }
        case 'USERS/TOGGLE-FOLLOWING-PROGRESS':
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
        type: 'USERS/FOLLOW',
        id: userId
    } as const
}

export const unFollowAC = (userID: number) => {
    return {
        type: 'USERS/UNFOLLOW',
        id: userID
    } as const
}

export const setUsers = (users: Array<UserType>) => {
    return {
        type: 'USERS/SET-USERS',
        users: users
    } as const
}

export const setCurrentPage = (page: number) => {
    return {
        type: 'USERS/SET-CURRENT-PAGE',
        page
    } as const
}

export const setTotalUsersCount = (count: number) => {
    return {
        type: 'USERS/SET-TOTAL-USERS-COUNT',
        count
    } as const
}

export const changeFetchingStatus = (fetching: boolean) => {
    return {
        type: 'USERS/CHANGE-FETCHING-STATUS',
        fetching
    } as const
}

export const toggleFollowingProgress = (followingProgress: boolean, userId: number) => {
    return {
        type: 'USERS/TOGGLE-FOLLOWING-PROGRESS',
        followingProgress,
        userId
    } as const
}

export const requestUsers = (currentPage: number, pageSize: number): ThunkType => async (dispatch) => {
    dispatch(changeFetchingStatus(true))
    const data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setCurrentPage(currentPage))
    dispatch(changeFetchingStatus(false))
    dispatch(setTotalUsersCount(+data.totalCount))
    dispatch(setUsers(data.items))
}

const followUnfollowFlow = async (
    dispatch: Dispatch, apiMethod: (id: number) => Promise<ResponseType>, id: number, actionCreator: (id: number) => ActionsType) => {
    dispatch(toggleFollowingProgress(true, id))
    const data = await apiMethod(id)
    if (data.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(toggleFollowingProgress(false, id))
}

// export const follow = (id: number): ThunkType => async (dispatch) => {
//     dispatch(toggleFollowingProgress(true, id))
//     const data = await followAPI.follow(id)
//     if (data.resultCode === 0) {
//         dispatch(followAC(id))
//     }
//     dispatch(toggleFollowingProgress(false, id))
// }

export const follow = (id: number): ThunkType => async (dispatch) => {
    await followUnfollowFlow(dispatch, followAPI.follow.bind(followAPI), id, followAC)
}

export const unFollow = (id: number): ThunkType => async (dispatch) => {
    await followUnfollowFlow(dispatch, followAPI.unFollow.bind(followAPI), id, unFollowAC)
}