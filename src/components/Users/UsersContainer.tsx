import {StateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {ActionsType} from '../../redux/Types';
import {followActionCreator, setUsersActionCreator, unFollowActionCreator, UserType} from '../../redux/users-reducer';
import {Users} from './Users';

const addStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users
    }
}

const addDispatchToProps = (dispatch:(action: ActionsType) => void) => {
    return {
        follow: (id: number) => dispatch(followActionCreator(id)),
        unfollow: (id: number) => dispatch(unFollowActionCreator(id)),
        setUsers: (users: Array<UserType>) => dispatch(setUsersActionCreator(users))
    }
}

export const UsersContainer =  connect(addStateToProps, addDispatchToProps)(Users)