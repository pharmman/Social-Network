import React from 'react';
import classes from './Header.module.css'
import {NavLink} from 'react-router-dom';
import {AuthType} from '../../redux/auth-reducer';
import {HeaderContainerPropsType} from './HeaderContainer';

type HeaderPropsType = {
    data: AuthType
    isAuth:boolean
}

export function Header(props: HeaderPropsType) {
    return (
        <header className={classes.header}>
            <div className={classes.header__logo}><img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/The_social_network.svg/1280px-The_social_network.svg.png"
                alt="logo"/></div>
            {props.data.isAuth ? <div className={classes.login}>{props.data.login}</div> :
                <div className={classes.login}><NavLink to={'/login'}>Login</NavLink></div>
            }
        </header>
    )
}