import React, {ChangeEvent} from 'react';
import {Post} from './Post/Post';
import {PostsDataType} from '../../../redux/state';

type MyPostsPropsType = {
    posts: Array<PostsDataType>
    messageForNewPost: string
    addPost: () => void
    changingValueForNewPost: (value: string) => void
}

export function MyPosts(props: MyPostsPropsType) {

    const posts = props.posts.map(p => {
        return (
            <Post key={p.id} messages={p.message} likesCount={p.likesCount}/>
        )
    })

    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => props.changingValueForNewPost(e.currentTarget.value)

    return (
        <div>
            My posts
            <div>
                <textarea value={props.messageForNewPost}
                          onChange={onChangeHandler}/>
                <button onClick={props.addPost}>Add post</button>
            </div>
            {posts}
        </div>
    )
}

