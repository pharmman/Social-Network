import React from 'react';
import {Post} from './Post/Post';
import {MyPostsPropsType} from './MyPostsContainer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

type FormDataType = {
    postValue: string
}


export function MyPosts(props:MyPostsPropsType) {

    const posts = props.posts.map(p => {
        return (
            <Post key={p.id} messages={p.message} likesCount={p.likesCount}/>
        )
    })


    const addPost = (value: FormDataType) => {
        props.addPost(value.postValue)
    }


    return (
        <div>
            My posts
            <MyPostsWithForm onSubmit={addPost}/>
            {posts}
        </div>
    )
}

const MyPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'postValue'} component={'textarea'}/>
            <button>Add post</button>
        </form>
    )
}


export const MyPostsWithForm = reduxForm<FormDataType>({form: 'post'})(MyPostForm)

