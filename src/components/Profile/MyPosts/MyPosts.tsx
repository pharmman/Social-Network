import React from 'react';
import {Post} from './Post/Post';

export function MyPosts() {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <Post/>
        </div>
    )
}

