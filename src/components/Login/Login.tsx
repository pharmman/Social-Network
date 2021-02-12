import React from 'react';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {createField, Input} from '../common/formContorols/FormControls';
import {maxLength, required} from '../../validators/validators';
import {connect} from 'react-redux';
import {loginTC, logOutTC} from '../../redux/auth-reducer';
import {StateType} from '../../redux/redux-store';
import {Redirect} from 'react-router-dom';
import styles from './../common/formContorols/FormControls.module.css'

type FormDataType = {
    email: string
    password: string,
    rememberMe: boolean
}

type MapStateToPropsType = {
    isAuth: boolean
}

type MapDispatchToPropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean) => void,
    logOutTC: () => void
}

type LoginPropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean) => void
    logOutTC: () => void
    isAuth: boolean
}

const mapStateToProps = (state: StateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const Login = (props: LoginPropsType) => {

    const login = (formData: FormDataType) => {
        props.loginTC(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/Profile'}/>
    }
    return (
        <LoginFormReduxForm onSubmit={login}/>
    )
}

const maxLength30 = maxLength(30)

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {createField('Email', 'email', Input,'email', [maxLength30, required])}
            {createField('Password', 'password', Input,'password', [maxLength30, required] )}
            {createField(null, 'RememberMe', Input,'checkbox',[],' Remember me')}
            <div>
                <button>Login</button>
            </div>
            {props.error && <div className={styles.commonError}>
                {props.error}
            </div>
            }
        </form>
    )
}

const LoginFormReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>(mapStateToProps, {
    loginTC,
    logOutTC
})(Login)

