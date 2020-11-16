import React from 'react';
import {UserType} from '../../redux/users-reducer';
import classes from './Users.module.css'
import  axios from 'axios'
import userAvatar from '../../assets/images/userAvatar.jpg'


type UserPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

type ResponseType = {
    items: UserType[]
    totalCount: string
    error: string | null
}

export const Users = (props: UserPropsType) => {

    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get<ResponseType>('https://social-network.samuraijs.com/api/1.0/users?count=4').then(response => {
                debugger
                props.setUsers(response.data.items)
            })
        }
    }


    return <>
        {props.users.length === 0? <div className={classes.users__btn}>
            <button  onClick={getUsers}>Get Users</button>
        </div> : ''}
        {props.users.map(u => <div key={u.id}>
                <div className={classes.wrapper}>
                    <div className={classes.avatar__wrapper}>
                        <img alt={'Avatar'} className={classes.avatar} src={u.photos.small !== null? u.photos.small : userAvatar}/>
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

}