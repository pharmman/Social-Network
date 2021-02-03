import React, {useState} from 'react';
import classes from './ProfileInfo.module.css'
import {ProfileType} from '../../../redux/profile-reducer';
import {Preloader} from '../../common/Preloader/Preloader';
import {Contacts} from '../Contacts/Contacts';
import {ProfileStatusWithHooks} from './ProfileStatusWithHook';

type ProfileInfoPropsType = {
    profile: ProfileType | null
    updateProfileStatus: (status: string) => void
    status: string
}

export function ProfileInfo(props: ProfileInfoPropsType) {
    const [accordionMode, setAccordionMode] = useState<boolean>(false)
    if (!props.profile) {
        return <Preloader/>
    }


    return (
        <div className={classes.profile}>
            <div className={classes.profile__img}>
                <div className={classes.profile__imgLogo}>
                    <img src="https://www.ixbt.com/img/n1/news/2019/7/5/dims_3_large.jpg"
                         alt=""/>
                </div>
                <div>
                    {props.profile?.photos.large ? <img src={props.profile?.photos.large}
                                                        alt=""/> :
                        <img src={'https://i.pinimg.com/originals/3f/c3/11/3fc3111809a18f70a9f1ccbea7e1ade6.jpg'}
                             alt={''}/>}
                    <ProfileStatusWithHooks updateProfileStatus={props.updateProfileStatus}  propsStatus={props.status || '-----'}/>
                </div>
            </div>
            <div className={classes.description}>
                <h4>About me: {props.profile?.aboutMe}</h4>
                <h4 style={{cursor: 'pointer', display: 'inline-block'}}
                    onClick={() => setAccordionMode(!accordionMode)}>CONTACTS:</h4>
                {accordionMode && <Contacts profile={props.profile}/>}
                <h4>Looking for a Job: {props.profile?.lookingForAJob ? '🤑' : '🤢'}</h4>
                <h4>Looking For A Job Description: {props.profile?.lookingForAJobDescription}</h4>
                <h4>Full name: {props.profile?.fullName}</h4>
            </div>
        </div>
    )
}



