import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {ActionsType} from '../../redux/store';
import {Users} from './Users';
import {followAC, setUsersAC, unFollowAC, UserType} from '../../redux/users-reducer';
import {Dispatch} from 'redux';

const mapStateToProps = (state:StateType) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
    return {
        follow: (userId:number) => dispatch(followAC(userId)),
        unFollow: (userId:number) => dispatch(unFollowAC(userId)),
        setUsers: (users: Array<UserType>) => dispatch(setUsersAC(users))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);