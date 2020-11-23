import React from 'react';
import {UserType} from '../../redux/users-reducer';
import classes from './Users.module.css'
import userAvatar from '../../assets/images/userAvatar.jpg'

export type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (p: number) => void
    currentPage: number
    users: Array<UserType>
    unFollow:(id: number) => void
    follow: (id:number) => void
}

export const Users = (props:UsersPropsType) =>  {

        const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
        const pages = [];
        for (let i = 1; i < pagesCount; i++) {
            pages.push(i)
        }

        return <>
            <div className={classes.pageNumbers}>
                {pages.map((p, index) => {
                    return <span
                            onClick={() => { props.onPageChanged(p)}}
                            className={props.currentPage === p ? classes.currentPage : ''}
                            style={{margin: '2px'}}
                            key={index}>{p}</span>
                        })}
            </div>
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
        </>;
    }