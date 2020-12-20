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
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentUsersPage(pageNumber);
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        let totalPages = this.props.totalUsersCount / this.props.pageSize
        totalPages = Math.ceil(totalPages)
        const pages = []
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i)
        }
        console.log(pages)
        return <>
            {pages.map((p, index) => {
                return <span className={this.props.currentPage === p ? classes.selectedPage : classes.listPages}
                             onClick={() => this.onPageChanged(p)} key={index}> {p} </span>
            })}
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