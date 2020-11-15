import {addPostActionCreator, changingValueForNewPostActionCreator} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {StateType} from '../../../redux/redux-store';
import {ActionsType} from '../../../redux/store';
import {Dispatch} from 'redux';


const mapStateToProps = (state:StateType) => {
    return {
        messageForNewPost: state.profilePage.messageForNewPost,
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch:Dispatch<ActionsType>) => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        newPostBody: (value: string) => dispatch(changingValueForNewPostActionCreator(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts)

