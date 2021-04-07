import {Contact} from '../Contact/Contact';
import {ContactsType, ProfileType} from '../../../../../redux/profile-reducer';
import styles from './PorfileInfoData.module.scss'
import React from 'react';
import {faBrain, faBriefcase, faPen, faSignOutAlt, faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {AboutMeItem} from '../AboutMeItem/AboutMeItem';

type ProfileInfoDataType = {
    profile: ProfileType
    setEditMode: (value: boolean) => void
    isOwner: boolean
    accordionMode: boolean
    setAccordionMode: (value: boolean) => void
}

export const ProfileInfoData: React.FC<ProfileInfoDataType> = ({
                                                                   setEditMode,
                                                                   profile,
                                                                   isOwner,
                                                                   setAccordionMode,
                                                                   accordionMode
                                                               }) => {
    const onClickHandler = () => {
        setEditMode(true)
        setAccordionMode(true)
    }

    const onClickContactsHandler = () => {
        setAccordionMode(!accordionMode)
    }

    return (
        <section className={styles.aboutSection}>
            <h4 className={styles.title}>About {isOwner &&
            <span className={styles.editButton}><FontAwesomeIcon  onClick={onClickHandler} icon={faPen}
                                   size={'sm'}/></span>}</h4>
            <ul className={styles.aboutItemsBlock}>
                <AboutMeItem icon={faUser} description={`About me: ${profile.aboutMe}`}/>
                <AboutMeItem icon={faBriefcase} description={`Looking for a Job: ${profile.lookingForAJob ? 'Yes' : 'No'}`}/>
                <AboutMeItem icon={faBrain} description={`Work experience: ${profile.lookingForAJobDescription}`}/>
            </ul>
            <h4 className={styles.contactsTitle} style={{cursor: 'pointer', display: 'inline-block'}}
                onClick={onClickContactsHandler}>Contacts:</h4>
            <ul className={styles.contactsBlock}>
            {accordionMode &&
            Object.keys(profile.contacts).map((key: string, index) => {
                return <Contact key={index} title={key}
                                value={profile.contacts[key as keyof ContactsType]}/>
            })}
            </ul>
        </section>
    )
}