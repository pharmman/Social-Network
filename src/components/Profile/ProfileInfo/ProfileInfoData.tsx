import {Contact} from './Contact/Contact';
import {ContactsType, ProfileType} from '../../../redux/profile-reducer';
import React from 'react';

type ProfileInfoDataType = {
    profile: ProfileType
    editMode: boolean
    setEditMode: (value: boolean) => void
    isOwner: boolean
    accordionMode: boolean
    setAccordionMode: (value: boolean) => void
}

export const ProfileInfoData: React.FC<ProfileInfoDataType> = ({
                                                                   setEditMode,
                                                                   editMode,
                                                                   profile,
                                                                   isOwner,
                                                                   setAccordionMode,
                                                                   accordionMode
                                                               }) => {
    const onClickHandler = () => {
        setEditMode(true)
    }

    const onClickContactsHandler = () => {
        setAccordionMode(!accordionMode)
    }

    return (
        <>
            {<button onClick={onClickHandler}>edit</button>}
            <h4>About me: {profile.aboutMe}</h4>
            <h4 style={{cursor: 'pointer', display: 'inline-block'}}
                onClick={onClickContactsHandler}>CONTACTS:</h4>
            {accordionMode &&
            Object.keys(profile.contacts).map((key: string, index) => {
                return <Contact key={index} title={key}
                                value={profile.contacts[key as keyof ContactsType]}/>
            })}
            <h4>Looking for a Job: {profile.lookingForAJob ? '🤑' : '🤢'}</h4>
            <h4>Looking For A Job Description: {profile.lookingForAJobDescription}</h4>
            <h4>Full name: {profile.fullName}</h4>
        </>
    )
}