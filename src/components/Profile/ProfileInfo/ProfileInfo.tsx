import React, {useState} from 'react';
import classes from './ProfileInfo.module.css'
import {ContactsType, ProfileType} from '../../../redux/profile-reducer';
import {Preloader} from '../../common/Preloader/Preloader';
import {Contact} from './Contact/Contact';
import {ProfileStatusWithHooks} from './ProfileStatusWithHook';
import {createField, Input, Textarea} from '../../common/formContorols/FormControls';

type ProfileInfoPropsType = {
    profile: ProfileType | null
    updateProfileStatus: (status: string) => void
    status: string
    owner: boolean
    updateProfilePhoto: (photo: File) => void
}


export function ProfileInfo(props: ProfileInfoPropsType) {
    const [accordionMode, setAccordionMode] = useState<boolean>(false)

    const handleChange = (selectorFiles: FileList | null) => {
        if (selectorFiles) {
            props.updateProfilePhoto(selectorFiles[0])
        }
    }
    if (!props.profile) {
        return <Preloader/>
    }

    // const temp:ContactsKeys[] = Object.keys(props.profile.contacts)
    const contactsTemp: { [key: string]: string | null } = props.profile.contacts

    return (
        <div className={classes.profile}>
            <div className={classes.profile__img}>
                <div className={classes.profile__imgLogo}>
                    <img src="https://www.ixbt.com/img/n1/news/2019/7/5/dims_3_large.jpg"
                         alt=""/>
                </div>
                <div>
                    {props.profile.photos.large ? <img src={props.profile.photos.large}
                                                       alt=""/> :
                        <img src={'https://i.pinimg.com/originals/3f/c3/11/3fc3111809a18f70a9f1ccbea7e1ade6.jpg'}
                             alt={''}/>}
                    {props.owner ?
                        <></>
                        :
                        <input type={'file'} onChange={(e) => handleChange(e.target.files)}/>
                    }
                    <ProfileStatusWithHooks updateProfileStatus={props.updateProfileStatus}
                                            propsStatus={props.status || '-----'}/>
                </div>
            </div>
            <div className={classes.description}>

            </div>
        </div>
    )
}

export const ProfileInfoData = () => {
    return(
        <>
            <h4>About me: {props.profile?.aboutMe}</h4>
            <h4 style={{cursor: 'pointer', display: 'inline-block'}}
                onClick={() => setAccordionMode(!accordionMode)}>CONTACTS:</h4>
            {accordionMode &&
            Object.keys(props.profile.contacts).map((key: string, index) => {
                return <Contact contacts={props.profile?.contacts} key={index} title={key}
                                value={props.profile?.contacts[key as keyof ContactsType]}/>
            })}
            <h4>Looking for a Job: {props.profile?.lookingForAJob ? '🤑' : '🤢'}</h4>
            <h4>Looking For A Job Description: {props.profile?.lookingForAJobDescription}</h4>
            <h4>Full name: {props.profile?.fullName}</h4>
        </>
    )
}

export const ProfileInfoForm = () => {
    return (
        <div>
            <form>
                <button>save</button>
                <h4>About me: {createField('About me', 'aboutMe', Input, 'text')}</h4>
                <h4 style={{cursor: 'pointer', display: 'inline-block'}}
                    onClick={() => props.setAccordionMode(!props.accordionMode)}>CONTACTS:</h4>
                <h4>Looking for a
                    Job: {createField('', 'lookingJob', Input, 'checkbox', null, 'Looking for a job')}</h4>
                <h4>Looking For A Job
                    Description: {createField('Looking For A Job Description', 'jobDescription', Textarea, 'text')}</h4>
                <h4>Full name: {createField('Full name', 'fullName', Input, 'text')}</h4>
            </form>
        </div>
    )
}


