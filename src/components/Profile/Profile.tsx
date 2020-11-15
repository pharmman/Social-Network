import React from 'react';
import classes from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';


export function Profile() {
    return (
        <div className={classes.profile}>
            <div className={classes.profile__img}>
                <img src="https://www.ixbt.com/img/n1/news/2019/7/5/dims_3_large.jpg"
                     alt=""/>
            </div>
            <div className={classes.description}>
                img + descr
            </div>
            <MyPostsContainer/>
        </div>
    )
}

