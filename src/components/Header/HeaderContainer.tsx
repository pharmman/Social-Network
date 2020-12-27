import React from 'react';
import {Header} from './Header';
import {StateType} from '../../redux/redux-store';
import {setAuthData} from '../../redux/auth-reducer';
import axios from 'axios';
import {connect} from 'react-redux';

type ResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: number
    messages: Array<string>
}

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
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                const {id, email, login} = response.data.data
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