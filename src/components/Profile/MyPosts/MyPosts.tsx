import React, {ChangeEvent} from 'react';
import {Post} from './Post/Post';
import {ActionsType,PostsDataType} from '../../../redux/store';
import {addPostActionCreator, changingValueForNewPostActionCreator} from '../../../redux/profile-reducer';

type MyPostsPropsType = {
    posts: Array<PostsDataType>
    messageForNewPost: string
    dispatch: (action: ActionsType) => void
}

export function MyPosts(props: MyPostsPropsType) {

    const posts = props.posts.map(p => {
        return (
            <Post key={p.id} messages={p.message} likesCount={p.likesCount}/>
        )
    })

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changingValueForNewPostActionCreator(e.currentTarget.value))
    }

    return (
        <div>
            My posts
            <div>
                <textarea value={props.messageForNewPost}
                          onChange={onChangeHandler}/>
                <button onClick={addPost}>Add post</button>
            </div>
            {posts}
        </div>
    )
}

