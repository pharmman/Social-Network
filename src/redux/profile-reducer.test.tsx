import {
    addPostAC,
    ContactsType,
    deletePostAC,
    profileReducer, ProfileStateType,
    ProfileType,
    setProfileStatusAC
} from './profile-reducer';

let state:ProfileStateType

const profile:ProfileType = {
    aboutMe: '',
    contacts: {

    } as ContactsType,
    fullName: '',
    lookingForAJob: false,
    lookingForAJobDescription: '',
    photos: {
        small: '',
        large: ''
    },
    userId: 1
}

beforeEach(() => {
    state = {
        profile,
        messageForNewPost: '',
        status: '',
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 12},
            {id: 3, message: 'Yo Yo Yo', likesCount: 12},
            {id: 4, message: 'It\'s revolution Jhonny!', likesCount: 100500}
        ]
    }
})

it('post should be added ', function () {

    const action = addPostAC('It\'s friday')
    const endState = profileReducer(state, action)

    expect(endState.posts.length).toBe(5)
});

it('status should be set ', function () {

    const action = setProfileStatusAC('Avocado')
    const endState = profileReducer(state, action)

    expect(endState.status).toBe('Avocado')
    
});

it('correct post should be deleted', function () {
    const action = deletePostAC(1)
    const endState = profileReducer(state, action)

    expect(endState.posts.length).toBe(3)
    expect(endState.posts[0].message).toBe('It\'s my first post')
});