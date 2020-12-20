import {StateType} from '../../redux/redux-store';
import {
    follow,
    setCurrentUsersPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unFollow,
    UserType
} from '../../redux/users-reducer';
import React from 'react';
import axios from 'axios';
import {Users} from './Users';
import {Preloader} from '../Preloader/Preloader';
import {connect} from 'react-redux';

type ResponseType = {
    items: UserType[]
    totalCount: number
    error: string | null
}

export class UsersContainer extends React.Component<UsersPropsType, StateType> {
    componentDidMount(): void {
        this.props.toggleIsFetching(true)
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentUsersPage(pageNumber);
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)

        })
    }
    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : <Users totalUsersCount={this.props.totalUsersCount}
                                                               pageSize={this.props.pageSize}
                                                               currentPage={this.props.currentPage}
                                                               onPageChanged={this.onPageChanged}
                                                               users={this.props.users}
                                                               follow={this.props.follow}
                                                               unFollow={this.props.unFollow}
                />}

            </>
        );
    }

}

export type UsersPropsType = MapDispatchToPropsType & MapStateToPropsType


const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching
    }
}

export type MapStateToPropsType = {
    users: Array<UserType>
    totalUsersCount: number
    currentPage: number
    pageSize: number
    isFetching: boolean
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentUsersPage: (page: number) => void
    setTotalUsersCount: (count: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}


export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>(mapStateToProps,{
    follow, unFollow, setUsers, setCurrentUsersPage, setTotalUsersCount, toggleIsFetching})(UsersContainer);