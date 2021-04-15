import {followAPI, ResponseType, usersAPI} from '../api/api';
import {saveState} from '../localStorage/localStorage';
import {Dispatch} from 'redux';
import {ActionsType, ThunkType} from "./store";

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
export type UsersReducerActionsType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof changeFetchingStatus>
    | ReturnType<typeof toggleFollowingProgress>

const initialState: UsersPageType = {
    users: [],
    totalUsersCount: 0,
    currentPage: 1,
    pageSize: 10,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state = initialState, action: UsersReducerActionsType): UsersPageType => {
    switch (action.type) {
        case 'USERS/FOLLOW':
            return {
                ...state,
                users: state.users.map((u) => u.id === action.id ? {...u, followed: true} : u)
            }
        case 'USERS/UNFOLLOW':
            return {
                ...state,
                users: state.users.map((u) => u.id === action.id ? {...u, followed: false} : u)
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
                followingInProgress: action.followingProgress ?
                    [...state.followingInProgress, action.userId]
                    :
                    state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const followAC = (userId: number) => ({type: 'USERS/FOLLOW',id: userId} as const)
export const unFollowAC = (userID: number) => ({type: 'USERS/UNFOLLOW',id: userID} as const)
export const setUsers = (users: Array<UserType>) => ({type: 'USERS/SET-USERS',users} as const)
export const setCurrentPage = (page: number) => ({type: 'USERS/SET-CURRENT-PAGE',page} as const)
export const setTotalUsersCount = (count: number) => ({type: 'USERS/SET-TOTAL-USERS-COUNT',count} as const)
export const changeFetchingStatus = (fetching: boolean) => ({type: 'USERS/CHANGE-FETCHING-STATUS',fetching} as const)
export const toggleFollowingProgress = (followingProgress: boolean, userId: number) =>
    ({type: 'USERS/TOGGLE-FOLLOWING-PROGRESS',followingProgress,userId} as const)

//thunks
export const requestUsers = (currentPage: number, pageSize: number): ThunkType => async (dispatch) => {
    dispatch(changeFetchingStatus(true))
    const data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setCurrentPage(currentPage))
    dispatch(setTotalUsersCount(+data.totalCount))
    dispatch(setUsers(data.items))
    dispatch(changeFetchingStatus(false))
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

export const follow = (id: number): ThunkType => async (dispatch) => {
    await followUnfollowFlow(dispatch, followAPI.follow.bind(followAPI), id, followAC)
}

export const unFollow = (id: number): ThunkType => async (dispatch) => {
    await followUnfollowFlow(dispatch, followAPI.unFollow.bind(followAPI), id, unFollowAC)
}