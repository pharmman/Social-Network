import {StateType} from './store';
import { createSelector } from 'reselect'

const getUsersSelector = (state: StateType) => {
    return state.usersPage.users
}

export const getUsers = createSelector(getUsersSelector, users => {
    return users.filter(u => true)
})

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