import React, {ChangeEvent} from 'react';
import {Post} from './Post/Post';
import {PostsDataType} from '../../../redux/store';

type MyPostsPropsType = {
    posts: Array<PostsDataType>
    messageForNewPost: string
    addPost: () => void
    onChange:(value:string) => void
}

export function MyPosts(props: MyPostsPropsType) {

    const posts = props.posts.map(p => {
        return (
            <Post key={p.id} messages={p.message} likesCount={p.likesCount}/>
        )
    })

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChange(e.currentTarget.value)
    }

    const addPost = () => {
        props.addPost()
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

