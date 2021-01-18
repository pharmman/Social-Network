import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../common/formContorols/FormControls';
import {maxLength, required} from '../../validators/validators';

type FormDataType = {
    login: string
    password: string,
    rememberMe: boolean
}


export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <LoginFormReduxForm onSubmit={onSubmit}/>
    )
}

const maxLength10 = maxLength(10)

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[maxLength10, required]} placeholder={'Login'} name={'login'} component={Input}/>
            </div>
            <div>
                <Field validate={[maxLength10, required]} type={'password'} placeholder={'Password'} name={'password'}
                       component={Input}/>
            </div>
            <div>
                <Field type={'checkbox'} placeholder={'Password'} name={'RememberMe'} component={Input}/>
                <span> Remember me</span>
            </div>
            <div>
                <button>Login</button>
            </div>

        </form>
    )
}

const LoginFormReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

