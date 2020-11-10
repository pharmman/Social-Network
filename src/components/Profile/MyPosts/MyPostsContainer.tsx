import {addPostActionCreator, changingValueForNewPostActionCreator} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {StateType} from '../../../redux/redux-store';
import {ActionsType} from '../../../redux/Types';

const mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.posts,
        messageForNewPost: state.profilePage.messageForNewPost
    }
}

const mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        onChange: (value: string) => {
            dispatch(changingValueForNewPostActionCreator(value))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
