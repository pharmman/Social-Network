import React from 'react';
import {UserType} from '../../redux/users-reducer';
import classes from './Users.module.css'
import {Preloader} from '../common/Preloader/Preloader';
import {User} from './User';
import {Paginator} from '../common/Paginator/Paginator';

export type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    isFetching: boolean
    onPageChanged: (p: number) => void
    currentPage: number
    users: Array<UserType>
    unFollow: (id: number) => void
    follow: (id: number) => void
    followingInProgress: number[]
}

export const Users = (props: UsersPropsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = [];
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }

    const onChangeHandler = (p: number) => {
        props.onPageChanged(p)
    }

    return <>
        <Paginator
            totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            onChangeHandler={onChangeHandler}/>
        {props.isFetching && <Preloader/>
        }
        {props.users.map(u => <div key={u.id}>
                <div className={classes.wrapper}>
                    <User user={u} unFollow={props.unFollow} follow={props.follow}
                          followingInProgress={props.followingInProgress}/>
                </div>
            </div>
        )}
    </>;
}

