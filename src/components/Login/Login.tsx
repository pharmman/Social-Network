import React from 'react';
import {InjectedFormProps, reduxForm, ValidateCallback} from 'redux-form';
import {createField, Input} from '../common/formContorols/FormControls';
import {maxLength, required} from '../../validators/validators';
import {connect} from 'react-redux';
import {loginTC, logOutTC} from '../../redux/auth-reducer';
import {StateType} from '../../redux/store';
import {Redirect} from 'react-router-dom';
import styles from './../common/formContorols/FormControls.module.css'

type FormDataType = {
    email: string
    password: string,
    rememberMe: boolean,
    captcha: string
}

type MapStateToPropsType = {
    isAuth: boolean
    captchaUrl: string
}

type MapDispatchToPropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean, captchaUrl: string) => void,
    logOutTC: () => void
}

type LoginPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: StateType) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

const Login = (props: LoginPropsType) => {

    const login = (formData: FormDataType) => {
        props.loginTC(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/Profile'}/>
    }
    return (
        <LoginFormReduxForm onSubmit={login} captchaUrl={props.captchaUrl}/>
    )
}

const maxLength30 = maxLength(30)

const LoginForm: React.FC<InjectedFormProps<FormDataType, { captchaUrl: string }> & { captchaUrl: string }> = (props) => {
    console.log(props.error)
    return (
        <form onSubmit={props.handleSubmit}>
            <p className={styles.text}>To log in get registered
                <a href={'https://social-network.samuraijs.com/'}
                   target={'_blank'} rel={'noopener noreferrer'}> here
                </a>
            </p>
            <p className={styles.text}>or use common test account credentials:</p>
            <p className={styles.text}>Email: free@samuraijs.com</p>
            <p className={styles.text}>Password: free</p>
            {createField('Email', 'email', Input, 'email', [maxLength30, required])}
            {createField('Password', 'password', Input, 'password', [maxLength30, required])}
            {createField(null, 'RememberMe', Input, 'checkbox', [], ' Remember me')}
            <div>{props.captchaUrl && <img src={props.captchaUrl} alt="captcha"/>}</div>
            <div>{props.captchaUrl && createField(
                'Enter symbols form image', 'captcha', Input, 'text')}</div>
            <div>
                <button>Login</button>
            </div>
            <div>
                {props.error && <div className={styles.commonError}>
                    {props.error}
                </div>
                }
            </div>
        </form>
    )
}

const LoginFormReduxForm = reduxForm<FormDataType, { captchaUrl: string }>
({
    form: 'login', shouldValidate(params: ValidateCallback<FormDataType, { captchaUrl: string }, string>): any {
    }
})(LoginForm)

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>(mapStateToProps, {
    loginTC,
    logOutTC
})(Login)

