import React from 'react';
import {Header} from './Header';
import {StateType} from '../../redux/redux-store';
import {logOutTC} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import {getUserProfile} from '../../redux/profile-reducer';

//types
type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = {
    logOutTC: () => void
    getUserProfile: (userId: string | number) => void
}

export type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType, StateType> {

    componentDidMount() {
        if (this.props.isAuth) {
            if (this.props.authorizedUserId) {
                this.props.getUserProfile(this.props.authorizedUserId)
            }
        }
    }


    render() {
        return (
            <>
                <Header {...this.props}/>
            </>
        );
    }

}

const mapStateToProps = (state: StateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        authorizedUserId: state.auth.id,
        profilePhoto: state.profilePage.profile?.photos.small,
        userName: state.profilePage.profile?.fullName
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>(mapStateToProps,
    {
        logOutTC,
        getUserProfile
    }
)(HeaderContainer)