import React from 'react';
import {UserType} from '../../redux/users-reducer';
import classes from './Users.module.css'
import userAvatar from '../../assets/images/userAvatar.jpg'
import {NavLink} from 'react-router-dom';

export type UserPropsType = {
    user: UserType
    unFollow: (id: number) => void
    follow: (id: number) => void
    followingInProgress: number[]
}

export const User: React.FC<UserPropsType> = ({user, unFollow, followingInProgress, follow}) => {
    return <>
        <div className={classes.avatar__wrapper}>
            <NavLink to={`/profile/${user.id}`}><img alt={'Avatar'} className={classes.avatar}
                                                  src={user.photos.small !== null ? user.photos.small : userAvatar}/></NavLink>

            <div>
                {user.followed ?
                    <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => unFollow(user.id)}
                    >Unfollowed</button> :

                    <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => follow(user.id)}>Follow</button>}

            </div>
        </div>

        <div className={classes.card__status}>
            <div className={classes.card__name}>
                <div>{user.name}</div>
                <div className={classes.card__name_status}>{user.status}</div>
            </div>
            <div className={classes.card__location}>
                <div className={classes.card__location_country}>u.location.country</div>
                <div>u.location.city</div>
            </div>
        </div>
    </>;
}

