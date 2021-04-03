import React from 'react';
import {createField, Input, Textarea} from '../../common/formContorols/FormControls';
import {ProfileType} from '../../../redux/profile-reducer';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {required} from '../../../validators/validators';
import {Contact} from './Contact/Contact';
import styles from '../../common/formContorols/FormControls.module.css';

type ProfileInfoFormType = {
    accordionMode: boolean
    setAccordionMode: (value: boolean) => void
    profile: ProfileType
}


const ProfileInfoForm: React.FC<InjectedFormProps<ProfileType,
    ProfileInfoFormType> & ProfileInfoFormType> = ({
                                                       setAccordionMode,
                                                       accordionMode,
                                                       handleSubmit,
                                                       profile,
                                                       error
                                                   }) => {

    const onClickContactsHandler = () => {
        setAccordionMode(!accordionMode)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button>Save</button>
                {error && <div className={styles.commonError}>
                    {error}
                </div>
                }
                <h4>About me: {createField('About me', 'aboutMe', Input, 'text', [])}</h4>
                <h4 style={{cursor: 'pointer', display: 'inline-block'}}
                    onClick={onClickContactsHandler}>CONTACTS:</h4>
                {accordionMode &&
                Object.keys(profile.contacts).map((key, index) => {
                    return <Contact key={index} title={key}
                                    value={createField(key, `contacts.${key}`, Input, 'text')}/>
                })}
                <h4>Looking for a
                    Job: {createField(null, 'lookingForAJob', Input, 'checkbox', null)}</h4>
                <h4>Looking For A Job
                    Description: {createField('Looking For A Job Description', 'lookingForAJobDescription', Textarea, 'text', [required])}</h4>
                <h4>Full name: {createField('Full name', 'fullName', Input, 'text', [required])}</h4>
            </form>
        </div>
    )
}

const ProfileInfoFormReduxForm = reduxForm<ProfileType, ProfileInfoFormType>({form: 'edit-profile'})(ProfileInfoForm)

export default ProfileInfoFormReduxForm
