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
}

type MapDispatchToPropsType = {
    setAuthData: (id: number, email: string, login: string) => void
}

type HeaderContainerType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerType, StateType> {
    componentDidMount() {
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            const {id, email, login} = response.data.data
            this.props.setAuthData(id, email, login)
        })
    }

    render() {
        return (
            <>
                <Header/>
            </>
        );
    }

}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>(mapStateToProps,
    {
        setAuthData
    }
)(HeaderContainer)