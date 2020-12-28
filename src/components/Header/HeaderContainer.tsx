import React from 'react';
import {Header} from './Header';
import {StateType} from '../../redux/redux-store';
import {setAuthData} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import {authAPI} from '../../api/api';

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    setAuthData: (id: number, email: string, login: string) => void
}

export type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType, StateType> {
    componentDidMount() {
        debugger
        authAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                const {id, email, login} = data.data
                this.props.setAuthData(id, email, login)
            }
        })
    }

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
        setAuthData
    }
)(HeaderContainer)