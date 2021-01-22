import React from 'react';
import {Header} from './Header';
import {StateType} from '../../redux/redux-store';
import {logOutTC} from '../../redux/auth-reducer';
import {connect} from 'react-redux';

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    logOutTC: () => void
}

export type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType, StateType> {

    render() {
        return (
            <>
                <Header {...this.props}/>
            </>
        );
    }

}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>(mapStateToProps,
    {
        logOutTC
    }
)(HeaderContainer)