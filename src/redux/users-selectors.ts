import {StateType} from './redux-store';

export const getUsers = (state: StateType) => {
    return state.usersPage.users
}

export const getCurrentPage = (state:StateType) => {
    return state.usersPage.currentPage
}

export const getUsersPageSize = (state:StateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state:StateType) => {
    return state.usersPage.totalUsersCount
}

export const getFetching = (state:StateType) => {
    return state.usersPage.isFetching
}

export const getFollowingProgress = (state:StateType) => {
    return state.usersPage.followingInProgress
}