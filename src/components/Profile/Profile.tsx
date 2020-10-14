import React from 'react';
import classes from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {PostsDataType} from '../../redux/state';

type ProfilePropsType = {
    posts: Array<PostsDataType>
}

export function Profile(props:ProfilePropsType) {
    return (
        <div className={classes.profile}>
            <div className={classes.profile__img}>
                <img src="https://www.ixbt.com/img/n1/news/2019/7/5/dims_3_large.jpg"
                     alt=""/>
            </div>
            <div className={classes.description}>
                img + descr
            </div>
            <MyPosts posts={props.posts}/>
        </div>
    )
}

