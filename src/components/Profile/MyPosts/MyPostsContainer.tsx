import {addPostActionCreator} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {StateType} from '../../../redux/redux-store';
import {ActionsType, PostsDataType} from '../../../redux/store';
import {Dispatch} from 'redux';

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    messageForNewPost: string
    posts: PostsDataType[]
}

const mapStateToProps = (state:StateType):MapStateToPropsType => {
    return {
        messageForNewPost: state.profilePage.messageForNewPost,
        posts: state.profilePage.posts
    }
}

type MapDispatchToPropsType = {
    addPost: (value:string) => void
}

const mapDispatchToProps = (dispatch:Dispatch<ActionsType>):MapDispatchToPropsType => {
    return {
        addPost: (value) => {
            dispatch(addPostActionCreator(value))
        }
    }
}


export default connect<MapStateToPropsType,MapDispatchToPropsType,{}, StateType>(mapStateToProps, mapDispatchToProps)(MyPosts)

