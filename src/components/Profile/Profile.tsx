import React from 'react';
import classes from './Profile.module.css'
import {MyPostsContainer} from './MyPosts/Post/MyPostsContainer';
import {ActionsType, ProfilePageType} from '../../redux/store';

type ProfilePropsType = {
    state: ProfilePageType
    dispatch: (action: ActionsType) => void
}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={classes.profile}>
            <div className={classes.profile__img}>
                <img src="https://www.ixbt.com/img/n1/news/2019/7/5/dims_3_large.jpg"
                     alt=""/>
            </div>
            <div className={classes.description}>
                img + descr
            </div>
            <MyPostsContainer messageForNewPost={props.state.messageForNewPost} posts={props.state.posts}
                              dispatch={props.dispatch}/>
        </div>
    )
}

