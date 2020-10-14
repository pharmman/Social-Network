import React from 'react';
import {Post} from './Post/Post';
import {PostsDataType} from '../../../redux/state';

type MyPostsPropsType = {
    posts: Array<PostsDataType>
    addPost: () => void
    changingValueForNewPost: (value:string) => void
}

export function MyPosts(props:MyPostsPropsType) {

    const posts = props.posts.map(p => {
        return (
            <Post key={p.id} messages={p.message} likesCount={p.likesCount}/>
        )
    })

    return (
        <div>
            My posts
            <div>
                <textarea onChange={(e) => props.changingValueForNewPost(e.currentTarget.value)}/>
                <button onClick={props.addPost}>Add post</button>
            </div>
            {posts}
        </div>
    )
}

