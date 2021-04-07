import React from 'react';
import {createField, Input, Textarea} from '../../../../common/formContorols/FormControls';
import {ProfileType} from '../../../../../redux/profile-reducer';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {required} from '../../../../../validators/validators';
import {Contact} from '../Contact/Contact';
import styles from './ProfileInfoForm.module.scss'
import {AboutMeItemForm} from '../AboutMeItemForm/AboutMeItemForm';
import {faBrain, faBriefcase, faUser} from '@fortawesome/free-solid-svg-icons';

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
        <section>
            <form onSubmit={handleSubmit}>
                <div>
                    <h4 className={styles.title}>About <button>Save</button></h4>
                </div>
                {error && <div className={styles.commonError}>
                    {error}
                </div>
                }
                <ul className={styles.aboutItemsBlock}>
                    <AboutMeItemForm icon={faUser} description={'About me:'}
                                     form={createField('About me', 'aboutMe', Input, 'text', [])}/>
                    <AboutMeItemForm icon={faBriefcase}
                                     description={'Looking for a Job:'}
                                     form={createField(null, 'lookingForAJob', Input, 'checkbox', null)}/>
                    <AboutMeItemForm icon={faBrain} description={'Work experience:'}
                                     form={createField('Looking For A Job Description', 'lookingForAJobDescription', Textarea, 'text', [required])}/>
                    <AboutMeItemForm icon={faUser} description={'Full name:'}
                                     form={createField('Full name', 'fullName', Input, 'text', [required])}/>
                </ul>
                <h4 className={styles.contactsTitle}
                    onClick={onClickContactsHandler}>Contacts:</h4>
                <ul className={styles.contactsBlock}>
                    {accordionMode &&
                    Object.keys(profile.contacts).map((key, index) => {
                        return <Contact key={index} title={key}
                                        value={createField(key, `contacts.${key}`, Input, 'text')}/>
                    })}
                </ul>
            </form>
        </section>
    )
}

const ProfileInfoFormReduxForm = reduxForm<ProfileType, ProfileInfoFormType>({form: 'edit-profile'})(ProfileInfoForm)

export default ProfileInfoFormReduxForm
