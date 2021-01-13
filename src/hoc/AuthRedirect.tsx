import React from 'react';
import {StateType} from '../redux/redux-store';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

type RedirectMapStateToPropsType = {
    isAuth: boolean
}


const redirectMapStateToProps = (state: StateType): RedirectMapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}


export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {

    const RedirectComponent: React.FC<RedirectMapStateToPropsType> = (props) => {
            let {isAuth, ...restProps} = props
            if (!isAuth) return <Redirect to={'/login'}/>

            return <WrappedComponent {...restProps as WCP}/>
    }


    return connect<RedirectMapStateToPropsType, {}, WCP, StateType>(redirectMapStateToProps)(RedirectComponent)
}

// export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {
//
//     class RedirectComponent extends React.Component<WCP & RedirectMapStateToPropsType, StateType> {
//         render() {
//             let {isAuth, ...restProps} = this.props
//             if (!isAuth) return <Redirect to={'/login'}/>
//             return <WrappedComponent {...restProps as WCP}/>
//
//         }
//     }
//
//
//     return connect<RedirectMapStateToPropsType, {}, WCP, StateType>(redirectMapStateToProps)(RedirectComponent)
// }

