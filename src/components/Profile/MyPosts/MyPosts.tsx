import React from 'react';
import {Post} from './Post/Post';
import {MyPostsPropsType} from './MyPostsContainer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {required} from '../../../validators/validators';
import {Textarea} from '../../common/formContorols/FormControls';

type FormDataType = {
    postValue: string
}


 export const MyPosts = (props: MyPostsPropsType) => {
     console.log('yo')
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
            <Field validate={[required]} name={'postValue'} component={Textarea}/>
            <button>Add post</button>
        </form>
    )
}


export const MyPostsWithForm = reduxForm<FormDataType>({form: 'post'})(MyPostForm)

