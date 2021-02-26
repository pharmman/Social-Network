import React, {useState} from 'react';
import classes from './ProfileInfo.module.css'
import {ProfileType} from '../../../redux/profile-reducer';
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileStatusWithHooks} from './ProfileStatusWithHook';
import {ProfileInfoData} from './ProfileInfoData';
import ProfileInfoForm from './ProfileInfoForm';

type ProfileInfoPropsType = {
    profile: ProfileType | null
    updateProfileStatus: (status: string) => void
    status: string
    isOwner: boolean
    updateProfilePhoto: (photo: File) => void
    updateProfile: (profile: ProfileType) => void
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
        console.log(formData)
        props.updateProfile(formData)
        // setEditMode(!editMode)
    }

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
                    {
                        props.isOwner
                        &&
                        <input type={'file'} onChange={(e) => handleChange(e.target.files)}/>
                    }
                    <ProfileStatusWithHooks updateProfileStatus={props.updateProfileStatus}
                                            propsStatus={props.status || '-----'}/>
                </div>
            </div>
            <div className={classes.description}>
                {
                    props.isOwner && editMode ?
                        <ProfileInfoForm profile={props.profile} onSubmit={onSubmit} accordionMode={accordionMode}
                                         setAccordionMode={setAccordionMode} />
                        :
                        <ProfileInfoData profile={props.profile} editMode={editMode} setEditMode={setEditMode}
                                         isOwner={props.isOwner} accordionMode={accordionMode}
                                         setAccordionMode={setAccordionMode}/>
                }
            </div>
        </div>
    )
}


