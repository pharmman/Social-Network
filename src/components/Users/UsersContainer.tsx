import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {ActionsType} from '../../redux/store';
import {Users} from './Users';
import {
    changeFetchingStatusAC,
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UserType
} from '../../redux/users-reducer';
import {Dispatch} from 'redux';
import axios from 'axios';
import React from 'react';

type ResponseType = {
    items: UserType[]
    totalCount: string
    error: string | null
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (count: number) => void
    changeFetchingStatus: (fetching: boolean) => void
}

type MapStateToPropsType = {
    users: Array<UserType>
    currentPage: number
    pageSize: number
    totalUsersCount: number
    isFetching: boolean
}

type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

export class UsersContainer extends React.Component<UsersContainerPropsType, StateType> {
    componentDidMount(): void {
        this.props.changeFetchingStatus(true)
        axios.get<ResponseType>
        (`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.changeFetchingStatus(false)
                this.props.setTotalUsersCount(+response.data.totalCount)
                this.props.setUsers(response.data.items)

            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.changeFetchingStatus(true)
        axios.get<ResponseType>
        (`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then(response => {
                this.props.changeFetchingStatus(false)
                this.props.setTotalUsersCount(+response.data.totalCount)
                this.props.setUsers(response.data.items)
            })
    }
    render() {
        return <>
            <Users
                users={this.props.users}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                unFollow={this.props.unFollow}
                follow={this.props.follow}
                isFetching={this.props.isFetching}
                changeFetchingStatus={this.props.changeFetchingStatus}
                onPageChanged={this.onPageChanged} />
        </>
    }
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionsType>): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => dispatch(followAC(userId)),
        unFollow: (userId: number) => dispatch(unFollowAC(userId)),
        setUsers: (users: Array<UserType>) => dispatch(setUsersAC(users)),
        setCurrentPage: (page: number) => dispatch(setCurrentPageAC(page)),
        setTotalUsersCount: count => dispatch(setTotalUsersCountAC(count)),
        changeFetchingStatus: fetching => dispatch(changeFetchingStatusAC(fetching))
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>(mapStateToProps, mapDispatchToProps)(UsersContainer);