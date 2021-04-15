import {addPostAC, PostsDataType} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {ActionsType, StateType} from '../../../redux/store';
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
            dispatch(addPostAC(value))
        }
    }
}


export default connect<MapStateToPropsType,MapDispatchToPropsType,{}, StateType>(mapStateToProps, mapDispatchToProps)(MyPosts)

