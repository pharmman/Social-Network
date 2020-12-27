import React, {useState} from 'react';
import classes from './ProfileInfo.module.css'
import {ProfileType} from '../../../redux/profile-reducer';
import {Preloader} from '../../Preloader/Preloader';

type ProfileInfoPropsType = {
    profile: ProfileType | null
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
                    <img src={'https://i.ytimg.com/vi/bGObTk05_dQ/maxresdefault.jpg'} alt={''}/>}
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


export const Contacts = (props: ProfileInfoPropsType) => {
    return (
        <>
            <p>Facebook: {props.profile?.contacts.facebook}</p>
            <p>Website: {props.profile?.contacts.website}</p>
            <p>VK: {props.profile?.contacts.vk}</p>
            <p>Twitter: {props.profile?.contacts.twitter}</p>
            <p>Instagramm: {props.profile?.contacts.instagram}</p>
            <p>Youtube: {props.profile?.contacts.youtube}</p>
            <p>Github: {props.profile?.contacts.github}</p>
            <p>MainLink: {props.profile?.contacts.mainLink}</p>
        </>
    )
}

