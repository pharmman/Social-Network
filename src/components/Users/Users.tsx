import React from 'react';
import classes from './Users.module.css'
import {UserType} from '../../redux/users-reducer';

type UsersPropsType = {
    users: Array<UserType>,
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
}

export const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                avatarUrl: 'https://pbs.twimg.com/profile_images/662619599578398720/Zmr9Zdp3_400x400.jpg',
                follow: true, name: 'Tim C.', status: 'I\'m a genius of marketing', location: {country: 'USA', city: 'LA'},
            },
            {
                id: 2,
                avatarUrl: 'https://pbs.twimg.com/profile_images/662619599578398720/Zmr9Zdp3_400x400.jpg',
                follow: true,
                name: 'Jhonny I.',
                status: 'I\'m a genius of design',
                location: {country: 'Great Britan', city: 'London'},
            },
            {
                id: 3,
                avatarUrl: 'https://pbs.twimg.com/profile_images/662619599578398720/Zmr9Zdp3_400x400.jpg',
                follow: false,
                name: 'Valya',
                status: 'I\'m a genius of nothing',
                location: {country: 'Russia', city: 'Moscow'},
            },
        ])
    }

    return <>
        {props.users.map(u => <div key={u.id}>
                <div className={classes.wrapper}>
                    <div>
                        <img alt={'Avatar'} className={classes.avatar} src={u.avatarUrl}/>
                        <div>
                            {u.follow ? <button onClick={() => props.unfollow(u.id)}>Folllow</button> :
                                <button onClick={() => props.follow(u.id)}>Unfollow</button>}
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