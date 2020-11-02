import React from 'react';
import {ActionsType, PostsDataType} from '../../../../redux/store';
import {addPostActionCreator, changingValueForNewPostActionCreator} from '../../../../redux/profile-reducer';
import {MyPosts} from '../MyPosts';

type MyPostsPropsType = {
    posts: Array<PostsDataType>
    messageForNewPost: string
    dispatch: (action: ActionsType) => void
}

export function MyPostsContainer(props: MyPostsPropsType) {

    const addPost = () => {
        debugger
        props.dispatch(addPostActionCreator())
    }

    const onChangeHandler = (value:string) => {
        props.dispatch(changingValueForNewPostActionCreator(value))
    }

    return (
        <div>
            <MyPosts messageForNewPost={props.messageForNewPost} posts={props.posts} addPost={addPost} onChange={onChangeHandler} />
        </div>
    )
}

