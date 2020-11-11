import React from 'react';
import {UserType} from '../../redux/users-reducer';


type UserPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (Users: Array<UserType>) => void
}

export const Users = (props: UserPropsType) => {
    return (
        <div>
            {props.users.map(u => {
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
                }
            )
            }
        </div>
    )
}