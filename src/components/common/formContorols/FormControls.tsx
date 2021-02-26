import {Field, WrappedFieldProps} from 'redux-form';
import React, {FC} from 'react';
import styles from './FormControls.module.css'

export const FormControl: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    const hasError = meta.touched && meta.error

    return (
        <div>
            <div className={hasError ? styles.error : ''}>
                {props.children}
            </div>
            <div>
                {hasError && <span className={styles.errorSpan}>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props

    return <FormControl input={input} meta={meta}><textarea {...input} {...restProps}/></FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props

    return <FormControl input={input} meta={meta}><input {...input} {...restProps}/></FormControl>
}

export const createField = (placeholder: string | null, name: string, component: FC<WrappedFieldProps>, type: string ,validators: any = [], text = '') => {
    return <>
        <Field type={type} validate={validators} placeholder={placeholder} name={name} component={component}/>
        <span>{text}</span>
    </>
}