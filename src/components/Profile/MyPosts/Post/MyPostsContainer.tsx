import React from 'react';
import {addPostActionCreator, changingValueForNewPostActionCreator} from '../../../../redux/profile-reducer';
import {MyPosts} from '../MyPosts';
import {StoreContext} from '../../../../StoreContext';


export function MyPostsContainer() {


    return <StoreContext.Consumer>
        {
            (store) => {
                const state = store.getState().profilePage
                const addPost = () => {
                    debugger
                    store.dispatch(addPostActionCreator())
                }

                const onChangeHandler = (value: string) => {
                    store.dispatch(changingValueForNewPostActionCreator(value))
                }
                return <div>
                    <MyPosts messageForNewPost={state.messageForNewPost} posts={state.posts} addPost={addPost}
                             onChange={onChangeHandler}/>
                </div>
            }}
    </StoreContext.Consumer>
}

