import {addPostActionCreator, changingValueForNewPostActionCreator} from '../../../../redux/profile-reducer';
import {MyPosts} from '../MyPosts';
import {connect} from 'react-redux';
import {StateType} from '../../../../redux/redux-store';
import {ActionsType} from '../../../../redux/store';


const mapStateToProps = (state:StateType) => {
    return {
        messageForNewPost: state.profilePage.messageForNewPost,
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch:(action: ActionsType) => void) => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        newPostBody: (value: string) => dispatch(changingValueForNewPostActionCreator(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts)

