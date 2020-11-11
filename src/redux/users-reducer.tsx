import {ActionsType} from './store';

export type UsersPageType = {
    users: Array<UserType>
}

export type UserType = {
    id: number
    avatarUrl: string
    followed: boolean
    name: string
    status: string
    location: LocationUser
}

type LocationUser = {
    country: string
    city: string
}

const initialState = {
    users:[
        {
        id: 1,
        avatarUrl: 'https://pbs.twimg.com/profile_images/662619599578398720/Zmr9Zdp3_400x400.jpg',
        followed: true, name: 'Tim C.', status: 'I\'m a genius of marketing', location: {country: 'USA', city: 'LA'},
    },
        {
            id: 2,
            avatarUrl: 'https://pbs.twimg.com/profile_images/662619599578398720/Zmr9Zdp3_400x400.jpg',
            followed: true,
            name: 'Jhonny I.',
            status: 'I\'m a genius of design',
            location: {country: 'Great Britan', city: 'London'},
        },
        {
            id: 3,
            avatarUrl: 'https://pbs.twimg.com/profile_images/662619599578398720/Zmr9Zdp3_400x400.jpg',
            followed: false,
            name: 'Valya',
            status: 'I\'m a genius of nothing',
            location: {country: 'Russia', city: 'Moscow'},
        }
    ]
}


export const usersReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case 'SET-USERS':
            return {
                ...state, users: action.users
            }
    }
}

export type FollowType = ReturnType<typeof followAC>
export type UnfollowType = ReturnType<typeof unFollowAC>
export type SetUsers = ReturnType<typeof setUsersAC>


export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        id: userId
    } as const
}

export const unFollowAC = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        id: userID
    } as const
}

export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        users: users
    } as const
}