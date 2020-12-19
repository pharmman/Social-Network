import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {ActionsType} from '../../redux/store';
import {Users} from './Users';
import {followAC, setUsersAC, unFollowAC, UsersPageType, UserType} from '../../redux/users-reducer';
import {Dispatch} from 'redux';

export type UsersPropsType = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>


const mapStateToProps = (state:StateType):MapStateToPropsType => {
    return {
        users:state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

 const mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
    return {
        follow: (userId:number) => dispatch(followAC(userId)),
        unFollow: (userId:number) => dispatch(unFollowAC(userId)),
        setUsers: (users: Array<UserType>) => dispatch(setUsersAC(users))
    }
}

export type MapStateToPropsType = {
    users: Array<UserType>
    totalUsersCount: number
    currentPage: number
}

export type MapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, >(mapStateToProps, mapDispatchToProps)(Users);