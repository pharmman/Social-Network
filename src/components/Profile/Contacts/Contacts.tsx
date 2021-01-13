import React from 'react';
import {ProfileType} from '../../../redux/profile-reducer';

type ContactsPropsType = {
    profile: ProfileType | null
}


export const Contacts = (props: ContactsPropsType) => {
    return (
        <>
            <p>Facebook: {props.profile?.contacts.facebook}</p>
            <p>Website: {props.profile?.contacts.website}</p>
            <p>VK: {props.profile?.contacts.vk}</p>
            <p>Twitter: {props.profile?.contacts.twitter}</p>
            <p>Instagram: {props.profile?.contacts.instagram}</p>
            <p>Youtube: {props.profile?.contacts.youtube}</p>
            <p>Github: {props.profile?.contacts.github}</p>
            <p>MainLink: {props.profile?.contacts.mainLink}</p>
        </>
    )
}