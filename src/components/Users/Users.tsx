import React from 'react';
import {UserType} from '../../redux/users-reducer';
import classes from './Users.module.css'
import userAvatar from '../../assets/images/userAvatar.jpg'
import axios from 'axios';
import {UsersPropsType} from './UsersContainer';
import {StateType} from '../../redux/redux-store';

type ResponseType = {
    items: UserType[]
    totalCount: number
    error: string | null
}

export class Users extends React.Component<UsersPropsType, StateType> {
    componentDidMount(): void {
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?count=100&${this.props.currentPage}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }



    render() {
        const totalPages = this.props.totalUsersCount /
        return <>
            {this.props.users.map(u => <div key={u.id}>
                    <div className={classes.wrapper}>
                        <div className={classes.avatar__wrapper}>
                            <img alt={'Avatar'} className={classes.avatar}
                                 src={u.photos.small !== null ? u.photos.small : userAvatar}/>
                            <div>
                                {u.followed ? <button onClick={() => this.props.unFollow(u.id)}>Unfollowed</button> :
                                    <button onClick={() => this.props.follow(u.id)}>Follow</button>}
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
}