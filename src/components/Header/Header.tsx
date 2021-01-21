import React from 'react';
import classes from './Header.module.css'
import {HeaderContainerPropsType} from './HeaderContainer';
import {NavLink} from 'react-router-dom';

type HeaderPropsType = HeaderContainerPropsType

export function Header(props: HeaderPropsType) {

    const logOut = () => {
        props.logOutTC()
    }

    return (
        <header className={classes.header}>
            <img className={classes.header__logo}
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/The_social_network.svg/1280px-The_social_network.svg.png"
                 alt="logo"/>
            <div className={classes.login}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={logOut}>LogOut</button> </div>
                    :
                <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>

    )
}