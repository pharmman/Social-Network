import React from 'react';
import {UserType} from '../../redux/users-reducer';
import classes from './Users.module.css'


type UserPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export const Users = (props: UserPropsType) => {
    if (props.users.length === 0) {
        props.setUsers([
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
        ])
    }


    return <>
        {props.users.map(u => <div key={u.id}>
                <div className={classes.wrapper}>
                    <div>
                        <img alt={'Avatar'} className={classes.avatar} src={u.avatarUrl}/>
                        <div>
                            {u.followed ? <button onClick={() => props.unFollow(u.id)}>Unfollowed</button> :
                                <button onClick={() => props.follow(u.id)}>Follow</button>}
                        </div>
                    </div>
                    <div className={classes.card__status}>
                        <div className={classes.card__name}>
                            <div>{u.name}</div>
                            <div className={classes.card__name_status}>{u.status}</div>
                        </div>
                        <div className={classes.card__location}>
                            <div className={classes.card__location_country}>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </>

}