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
import React from 'react';
import {usersAPI} from '../../api/api';


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
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.changeFetchingStatus(false)
                this.props.setTotalUsersCount(+data.totalCount)
                this.props.setUsers(data.items)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.changeFetchingStatus(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.changeFetchingStatus(false)
                this.props.setTotalUsersCount(+data.totalCount)
                this.props.setUsers(data.items)
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
                onPageChanged={this.onPageChanged}/>
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

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>(mapStateToProps, {
    follow,
    changeFetchingStatus,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    unFollow
})(UsersContainer);