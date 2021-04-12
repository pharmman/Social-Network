import React from 'react';
import {UserType} from '../../redux/users-reducer';
import styles from './User.module.css'
import userAvatar from '../../assets/images/userAvatar.jpg'
import {NavLink} from 'react-router-dom';

export type UserPropsType = {
    user: UserType
    unFollow: (id: number) => void
    follow: (id: number) => void
    followingInProgress: number[]
}

export const User: React.FC<UserPropsType> = ({user, unFollow, followingInProgress, follow}) => {
    return <div className={styles.wrapper}>
        <div className={styles.avatarWrapper}>
            <NavLink to={`/profile/${user.id}`}><img alt={'Avatar'} className={styles.avatar}
                                                     src={user.photos.small !== null ? user.photos.small : userAvatar}/></NavLink>

            <div>
                {user.followed ?
                    <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => unFollow(user.id)}
                    >Unfollow</button>
                    :
                    <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => follow(user.id)}>Follow</button>}
            </div>
        </div>

        <div className={styles.bodyCard}>
            <div className={styles.cardNameStatus}>
                <h3>{user.name}</h3>
                {user.status ?
                    <div className={styles.status}>{user.status}</div>
                    :
                    <div className={styles.noStatus}><i>Here will be status</i></div>
                }
            </div>
        </div>
    </div>;
}

