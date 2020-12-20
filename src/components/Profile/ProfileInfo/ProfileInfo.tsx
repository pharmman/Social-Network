import classes from '../Profile.module.css';
import React from 'react';
import {ProfileType} from '../../../redux/profile-reducer';



export const ProfileInfo = (props:{profile: ProfileType}) => {
    return (
        <div className={classes.profile}>
            <div>
                <img src={props.profile.photos.large}/>
                ищу работу: {props.profile.lookingForAJob}
            </div>
            <div className={classes.profile__img}>
                <img src="https://www.ixbt.com/img/n1/news/2019/7/5/dims_3_large.jpg"
                     alt=""/>
            </div>
            <div className={classes.description}>
                img + descr
            </div>
        </div>
    )
}