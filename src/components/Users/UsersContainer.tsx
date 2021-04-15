import {connect} from 'react-redux';
import {StateType} from '../../redux/store';
import {Users} from './Users';
import {follow, requestUsers, setCurrentPage, setTotalUsersCount, unFollow} from '../../redux/users-reducer';
import React from 'react';
import {
    getCurrentPage,
    getFetching,
    getFollowingProgress,
    getTotalUsersCount,
    getUsers,
    getUsersPageSize
} from '../../redux/users-selectors';


type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (count: number) => void
    requestUsers: (currentPage: number, pageSize: number) => void
}

type MapStateToPropsType = ReturnType<typeof mapStateToProps>
export type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<UsersContainerPropsType, StateType> {
    componentDidMount(): void {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
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
                onPageChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state: StateType) => {
    return {
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        pageSize: getUsersPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        isFetching: getFetching(state),
        followingInProgress: getFollowingProgress(state),
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>(mapStateToProps, {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    unFollow,
    requestUsers
})(UsersContainer);