import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {Users} from './Users';
import {
    changeFetchingStatus,
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    unFollow,
    UserType
} from '../../redux/users-reducer';
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

class UsersContainer extends React.Component<UsersContainerPropsType, StateType> {
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

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>(mapStateToProps, {follow, changeFetchingStatus, setCurrentPage, setTotalUsersCount, setUsers, unFollow})(UsersContainer);