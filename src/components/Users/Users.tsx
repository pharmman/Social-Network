import React from 'react';
import {UserType} from '../../redux/users-reducer';
import styles from './Users.module.css'
import {Preloader} from '../common/Preloader/Preloader';
import {User} from './User';
import {Paginator} from '../common/Paginator/Paginator';

type UsersPropsType = {
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

    const onChangeHandler = (p: number) => {
        props.onPageChanged(p)
    }

    if (props.isFetching) {
        return <Preloader/>
    }

    return <>
        {props.users.map(u => <div className={styles.wrapper} key={u.id}>
                <>
                    <User user={u} unFollow={props.unFollow} follow={props.follow}
                          followingInProgress={props.followingInProgress}/>
                </>
            </div>
        )}
        <Paginator
            totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            onChangeHandler={onChangeHandler}/>
    </>
}

