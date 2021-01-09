import React from 'react';
import {Redirect} from 'react-router-dom';
import {StateType} from '../redux/redux-store';
import {connect} from 'react-redux';

type RedirectMapStateToPropsType = {
    isAuth: boolean
}

const redirectMapStateToProps = (state: StateType):RedirectMapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}


export const withAuthRedirect = (Component: any) => {

    class RedirectComponent extends React.Component<any, any> {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>
            return <Component {...this.props}/>
        }
    }


    return connect(redirectMapStateToProps,)(RedirectComponent)
}

