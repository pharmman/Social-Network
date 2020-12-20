import React from 'react';
import {UserType} from '../../redux/users-reducer';
import classes from './Users.module.css'
import userAvatar from '../../assets/images/userAvatar.jpg'


type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p:number) => void
    users: Array<UserType>
    follow: (id: number) => void
    unFollow: (id: number) => void
}

export const Users = (props:UsersPropsType) => {
    let totalPages = props.totalUsersCount / props.pageSize
    totalPages = Math.ceil(totalPages)
    const pages = []
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }
    return (
        <>
            {pages.map((p, index) => {
                return <span className={props.currentPage === p ? classes.selectedPage : classes.listPages}
                             onClick={() => props.onPageChanged(p)} key={index}> {p} </span>
            })}
            {props.users.map(u => <div key={u.id}>
                    <div className={classes.wrapper}>
                        <div className={classes.avatar__wrapper}>
                            <img alt={'Avatar'} className={classes.avatar}
                                 src={u.photos.small !== null ? u.photos.small : userAvatar}/>
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
                                <div className={classes.card__location_country}>u.location.country</div>
                                <div>u.location.city</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
)
}