import {addPostActionCreator, changingValueForNewPostActionCreator} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {StateType} from '../../../redux/redux-store';
import {ActionsType, ProfilePageType} from '../../../redux/store';
import {Dispatch} from 'redux';

export type MyPostsPropsType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>



const mapStateToProps = (state:StateType):ProfilePageType => {
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

