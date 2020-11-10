import {ActionsType} from './Types';

export type UsersPageType = {
    users: Array<UserType>

}

export type UserType = {
    id: number,
    avatarUrl: string,
    follow: boolean,
    name: string,
    status: string
    location: LocationUserType
}

export type LocationUserType = {
    country: string,
    city: string
}

const initialState = {
    users: [
    //     {
    //         id: 1,
    //         avatarUrl: 'https://pbs.twimg.com/profile_images/662619599578398720/Zmr9Zdp3_400x400.jpg',
    //         follow: true, name: 'Tim C.', status: 'I\'m a genius of marketing', location: {country: 'USA', city: 'LA'},
    //     },
    //     {
    //         id: 2,
    //         avatarUrl: 'https://pbs.twimg.com/profile_images/662619599578398720/Zmr9Zdp3_400x400.jpg',
    //         follow: true,
    //         name: 'Jhonny I.',
    //         status: 'I\'m a genius of design',
    //         location: {country: 'Great Britan', city: 'London'},
    //     },
    //     {
    //         id: 3,
    //         avatarUrl: 'https://pbs.twimg.com/profile_images/662619599578398720/Zmr9Zdp3_400x400.jpg',
    //         follow: false,
    //         name: 'Valya',
    //         status: 'I\'m a genius of nothing',
    //         location: {country: 'Russia', city: 'Moscow'},
    //     },
    ]
};

export const userReducer = (state: UsersPageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, follow: true}
                    }
                    return u
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, follow: false}
                    }
                    return u
                })
            }
        case 'SET_USERS':
            return {
                ...state, users: action.users
            }
        default:
            return state
    }
}

export const followActionCreator = (id: number) => {
    return {
        type: 'FOLLOW',
        id: id
    } as const
}

export const unFollowActionCreator = (id: number) => {
    return {
        type: 'UNFOLLOW',
        id: id
    } as const
}

export const setUsersActionCreator = (users: Array<UserType>) => {
    return {
        type: 'SET_USERS',
        users: users
    } as const
}

export type FollowActionType = ReturnType<typeof followActionCreator>;
export type UnFollowActionType = ReturnType<typeof unFollowActionCreator>;
export type SetUsersActionType = ReturnType<typeof setUsersActionCreator>;