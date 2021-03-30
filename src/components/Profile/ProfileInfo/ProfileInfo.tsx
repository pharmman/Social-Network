import React, {useState} from 'react';
import styles from './ProfileInfo.module.scss'
import {ProfileType} from '../../../redux/profile-reducer';
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileStatusWithHooks} from './ProfileStatusWithHook';
import {ProfileInfoData} from './ProfileInfoData';
import ProfileInfoForm from './ProfileInfoForm';
import profileCover from '../../../assets/images/profile-cover.jpg'

type ProfileInfoPropsType = {
    profile: ProfileType | null
    updateProfileStatus: (status: string) => void
    status: string
    isOwner: boolean
    updateProfilePhoto: (photo: File) => void
    updateProfile: (profile: ProfileType) => Promise<any>
}

export type ProfileFormDataType = {
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
}


export function ProfileInfo(props: ProfileInfoPropsType) {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [accordionMode, setAccordionMode] = useState<boolean>(false)

    const handleChange = (selectorFiles: FileList | null) => {
        if (selectorFiles) {
            props.updateProfilePhoto(selectorFiles[0])
        }
    }
    if (!props.profile) {
        return <Preloader/>
    }

    const onSubmit = (formData: ProfileType) => {
        props.updateProfile(formData).then(() => {
            setEditMode(!editMode)
            setAccordionMode(false)
        })
    }

    return (
        <div className={styles.profile}>
            <div className={styles.profileBanner}>
                <img src={profileCover} alt={'profile cover'}/>
            </div>
            <div className={styles.profileContent}>
                <div className={styles.profileAvatar}>
                    <div className={styles.profileAvatarHolder}>
                        {props.profile.photos.large ? <img src={props.profile.photos.large}
                                                           alt=""/> :
                            <img src={'https://i.pinimg.com/originals/3f/c3/11/3fc3111809a18f70a9f1ccbea7e1ade6.jpg'}
                                 alt={''}/>}
                    </div>
                </div>
            </div>
            <div className={styles.profile__img}>
                <div>
                    {
                        props.isOwner
                        &&
                        <input type={'file'} onChange={(e) => handleChange(e.target.files)}/>
                    }
                    <ProfileStatusWithHooks updateProfileStatus={props.updateProfileStatus}
                                            propsStatus={props.status || '-----'}/>
                </div>
            </div>
            <div className={styles.description}>
                {
                    props.isOwner && editMode ?
                        <ProfileInfoForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} accordionMode={accordionMode}
                                         setAccordionMode={setAccordionMode} />
                        :
                        <ProfileInfoData profile={props.profile} setEditMode={setEditMode}
                                         isOwner={props.isOwner} accordionMode={accordionMode}
                                         setAccordionMode={setAccordionMode}/>
                }
            </div>
        </div>
    )
}


