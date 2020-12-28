import React from 'react';
import {UserType} from '../../redux/users-reducer';
import classes from './Users.module.css'
import userAvatar from '../../assets/images/userAvatar.jpg'
import {Preloader} from '../Preloader/Preloader';
import {NavLink} from 'react-router-dom';
import {followAPI} from '../../api/api';

export type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    isFetching: boolean
    onPageChanged: (p: number) => void
    currentPage: number
    users: Array<UserType>
    unFollow: (id: number) => void
    follow: (id: number) => void
    changeFetchingStatus: (fetching: boolean) => void
}

export const Users = (props: UsersPropsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = [];
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }

    const follow = (id:number) => {
        followAPI.follow(id)
            .then(data => {
            if (data.resultCode === 0) {
                props.follow(id)
            }
        })
    }

    const unFollow = (id:number) => {
        followAPI.unFollow(id)
            .then(data => {
            if (data.resultCode === 0) {
                props.unFollow(id)
            }
        })
    }

    return <>
        <div className={classes.pageNumbers}>
            {pages.map((p, index) => {
                return <span
                    onClick={() => {
                        props.onPageChanged(p)
                    }}
                    className={props.currentPage === p ? classes.currentPage : ''}
                    style={{margin: '2px'}}
                    key={index}>{p}</span>
            })}
        </div>
        {props.isFetching && <Preloader/>
        }
        {props.users.map(u => <div key={u.id}>
                <div className={classes.wrapper}>

                    <div className={classes.avatar__wrapper}>
                        <NavLink to={`/profile/${u.id}`}><img alt={'Avatar'} className={classes.avatar}
                                                              src={u.photos.small !== null ? u.photos.small : userAvatar}/></NavLink>

                        <div>
                            {u.followed ?
                                <button onClick={() => unFollow(u.id)}
                                >Unfollowed</button> :

                                <button onClick={() => follow(u.id)}>Follow</button>}

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