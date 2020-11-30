import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import axios from 'axios';
import {AuthType, setUsersAuthData} from '../../redux/auth-reducer';
import {StateType} from '../../redux/redux-store';

type MapDispatchToPropsType = {
    setUsersAuthData: (id: number, email: string, login: string) => void
}

type MapStateToPropsType = {
    isAuth:boolean
}

type ResponseType = {
    data: AuthType,
    messages: [],
    fieldsErrors: [],
    resultCode: number
}

export type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType, StateType>{
    componentDidMount() {
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                const {id, email, login} = response.data.data
                this.props.setUsersAuthData(id, email, login)
                }
            })
    }

    render() {
        return (
            <div>
                <Header {...this.props}/>
            </div>
        );
    }
}

const mapStateToProps = (state:StateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>(mapStateToProps, {setUsersAuthData})(HeaderContainer)

